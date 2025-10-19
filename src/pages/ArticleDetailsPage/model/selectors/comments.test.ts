import { StateSchema } from "@/app/providers/StoreProvider";
import {
  getArticleCommentsError,
  getArticleCommentsIsLoading,
} from "./comments";

describe("getArticleComments.test", () => {
  test("getArticleCommentsIsLoading: should return true", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        comments: { isLoading: true },
      },
    };
    expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(true);
  });

  test("getArticleCommentsError: should return error", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        comments: { error: "error" },
      },
    };
    expect(getArticleCommentsError(state as StateSchema)).toEqual("error");
  });

  test("getArticleCommentsIsLoading: should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(
      undefined,
    );
  });

  test("getArticleCommentsError: should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleCommentsError(state as StateSchema)).toEqual(undefined);
  });
});
