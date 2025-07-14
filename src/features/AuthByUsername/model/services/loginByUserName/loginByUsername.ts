/* eslint-disable no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

enum LoginErrors {
  INCORRECT_USER_DATA = "INCORRECT_USER_DATA",
  SERVER_ERROR = "SERVER_ERROR",
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>("login/loginByUsername", async (authData, thunkApi) => {
  const { rejectWithValue, dispatch, extra } = thunkApi;

  try {
    const response = await extra.api.post<User>("/login", authData);

    if (!response.data) {
      throw new Error();
    }
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return rejectWithValue("error");
  }
});
