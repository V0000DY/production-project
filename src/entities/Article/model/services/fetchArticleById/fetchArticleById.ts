import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "../../types/article";

export const fetchArticleById = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
>("articleDetails/fetchArticleById", async (articleId, thunkApi) => {
  const { rejectWithValue, extra } = thunkApi;

  try {
    const response = await extra.api.get<Article>(`/articles/${articleId}`, {
      params: {
        _expand: "user",
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return rejectWithValue("error");
  }
});
