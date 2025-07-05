import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById";
import { ArticleType } from "../types/article";
import { ArticleDetailsSchema } from "../types/articleDetailsSchema";
import { articleDetailsReducer } from "./articleDetailsSlice";

const data = {
  id: "1",
  title: "title",
  subtitle: "subtitle",
  img: "img",
  views: 123,
  createdAt: "date",
  userId: "1",
  type: [ArticleType.IT],
  blocks: [],
};

describe("articleDetailsSlice.test", () => {
  test("test fetch article by id service pending", () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false,
      error: "error",
    };

    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        fetchArticleById.pending
      )
    ).toEqual({ isLoading: true, error: undefined });
  });

  test("test fetch article by id service fulfilled", () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
    };

    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        fetchArticleById.fulfilled(data, "articleId", "1")
      )
    ).toEqual({
      isLoading: false,
      error: undefined,
      data,
    });
  });
});
