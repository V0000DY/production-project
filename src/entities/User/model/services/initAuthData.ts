import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { User } from "../types/user";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localStorage";
import { getUserDataByIdQuery } from "../../api/userApi";

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
  "user/initAuthData",
  async (newJsonSettings, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;

    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    if (!userId) {
      return rejectWithValue("");
    }

    try {
      const response = await dispatch(getUserDataByIdQuery(userId)).unwrap();

      if (!response.jsonSettings) {
        return rejectWithValue("");
      }

      return response;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      return rejectWithValue("");
    }
  },
);
