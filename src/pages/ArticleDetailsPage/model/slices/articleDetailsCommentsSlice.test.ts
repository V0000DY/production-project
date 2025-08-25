import { Comment } from "@/entities/Comment";
import { ArticleDetailsCommentsSchema } from "../types/ArticleDetailsCommentsSchema";
import { articleDetailsCommentsReducer } from "./articleDetailsCommentsSlice";
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId";

const comment1: Comment = {
  id: "1",
  text: "Test comment 1",
  user: {
    id: "u1",
    username: "user1",
  },
};

const comment2: Comment = {
  id: "2",
  text: "Test comment 2",
  user: {
    id: "u2",
    username: "user2",
  },
};

describe("articleDetailsCommentsSlice.test", () => {
  const initialState: ArticleDetailsCommentsSchema = {
    ids: [],
    entities: {},
    isLoading: false,
    error: undefined,
  };

  test("should return initial state", () => {
    expect(articleDetailsCommentsReducer(undefined, { type: "" })).toEqual(
      initialState
    );
  });

  test("fetchArticleComments.pending: setup isLoading true and error undefined", () => {
    const state = { ...initialState, error: "error" };
    const next = articleDetailsCommentsReducer(
      state,
      fetchCommentsByArticleId.pending("", "articleId")
    );
    expect(next.isLoading).toBe(true);
    expect(next.error).toBeUndefined();
  });

  test("fetchArticleComments.fulfilled: save comments and setup isLoading false", () => {
    const state = { ...initialState, isLoading: true };
    const comments = [comment1, comment2];
    const next = articleDetailsCommentsReducer(
      state,
      fetchCommentsByArticleId.fulfilled(comments, "", "articleId")
    );
    expect(next.isLoading).toBe(false);
    expect(next.ids).toEqual(["1", "2"]);
    expect(next.entities["1"]).toEqual(comment1);
    expect(next.entities["2"]).toEqual(comment2);
  });

  test("fetchArticleComments.rejected: setup isLoading false and error", () => {
    const state = { ...initialState, isLoading: true };
    const error = "Network error";
    const next = articleDetailsCommentsReducer(
      state,
      fetchCommentsByArticleId.rejected(new Error(), "", "articleId", error)
    );
    expect(next.isLoading).toBe(false);
    expect(next.error).toBe(error);
  });
});
