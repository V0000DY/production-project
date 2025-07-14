import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Comment } from "entities/Comment";
import { fetchCommentsByArticleId } from "./fetchCommentsByArticleId";

describe("fetchCommentsByArticleId.test", () => {
  const comments: Comment[] = [
    { id: "1", text: "Test comment 1", user: { id: "u1", username: "user1" } },
    { id: "2", text: "Test comment 2", user: { id: "u2", username: "user2" } },
  ];

  test("success: return comments", async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: comments }));

    const result = await thunk.callThunk("123");

    expect(thunk.api.get).toHaveBeenCalledWith("/comments", {
      params: { articleId: "123", _expand: "user" },
    });
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(comments);
  });

  test("reject: if articleId is not passed", async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);

    const result = await thunk.callThunk(undefined);

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("error");
    expect(thunk.api.get).not.toHaveBeenCalled();
  });

  test("reject: if API response without data", async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    thunk.api.get.mockReturnValue(Promise.resolve({}));

    const result = await thunk.callThunk("123");

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("error");
  });

  test("reject: if API return error", async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    thunk.api.get.mockReturnValue(Promise.resolve(new Error("Network error")));

    const result = await thunk.callThunk("123");

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("error");
  });
});
