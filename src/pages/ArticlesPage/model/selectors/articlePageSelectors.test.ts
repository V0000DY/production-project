import { StateSchema } from "@/app/providers/StoreProvider";
import { ArticleView } from "@/entities/Article";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "./articlePageSelectors";

describe("articlePageSelectors.test", () => {
  test("getArticlesPageIsLoading: should return true", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        isLoading: true,
      },
    };
    expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(true);
  });

  test("getArticlesPageError: should return error", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        error: "error",
      },
    };
    expect(getArticlesPageError(state as StateSchema)).toEqual("error");
  });

  test("getArticlesPageView: should return BIG", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        view: ArticleView.BIG,
      },
    };
    expect(getArticlesPageView(state as StateSchema)).toEqual(ArticleView.BIG);
  });

  test("getArticlesPageIsLoading: should work with empty state and return false", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(false);
  });

  test("getArticlesPageError: should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageError(state as StateSchema)).toEqual(undefined);
  });

  test("getArticlesPageView: should work with empty state and return SMALL", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageView(state as StateSchema)).toEqual(
      ArticleView.SMALL
    );
  });
});
