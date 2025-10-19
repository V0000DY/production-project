import { TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import * as UserSelectors from "@/entities/User";
import { getArticleDetailsData } from "@/entities/Article";
import { Comment } from "@/entities/Comment";
import { addCommentForArticle } from "./addCommentForArticle";

jest.mock("entities/User");
jest.mock("entities/Article/model/selectors/articleDetails");

describe("addCommentForArticle (TestAsyncThunk)", () => {
  const userData = { id: "u1", username: "user1" };
  const article = { id: "a1", title: "Article" };
  const comment: Comment = { id: "c1", text: "Test comment", user: userData };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("success: add comment", async () => {
    // Мокаем селекторы
    (UserSelectors.getUserAuthData as jest.Mock).mockReturnValue(userData);
    (getArticleDetailsData as jest.Mock).mockReturnValue(article);

    const thunk = new TestAsyncThunk(addCommentForArticle);
    thunk.api.post.mockResolvedValue({ data: comment });

    const result = await thunk.callThunk("Test comment");

    expect(thunk.api.post).toHaveBeenCalledWith("/comments", {
      articleId: "a1",
      userId: "u1",
      text: "Test comment",
    });
    expect(
      thunk.dispatch.mock.calls.some(([arg]) => typeof arg === "function"),
    ).toBe(true);
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(comment);
  });

  test("reject: if no userData", async () => {
    (UserSelectors.getUserAuthData as jest.Mock).mockReturnValue(undefined);
    (getArticleDetailsData as jest.Mock).mockReturnValue(article);

    const thunk = new TestAsyncThunk(addCommentForArticle);
    const result = await thunk.callThunk("Test comment");

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("no data");
    expect(thunk.api.post).not.toHaveBeenCalled();
  });

  test("reject: if no article", async () => {
    (UserSelectors.getUserAuthData as jest.Mock).mockReturnValue(userData);
    (getArticleDetailsData as jest.Mock).mockReturnValue(undefined);

    const thunk = new TestAsyncThunk(addCommentForArticle);
    const result = await thunk.callThunk("Test comment");

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("no data");
    expect(thunk.api.post).not.toHaveBeenCalled();
  });

  test("reject: if empty comment", async () => {
    (UserSelectors.getUserAuthData as jest.Mock).mockReturnValue(userData);
    (getArticleDetailsData as jest.Mock).mockReturnValue(article);

    const thunk = new TestAsyncThunk(addCommentForArticle);
    const result = await thunk.callThunk("");

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("no data");
    expect(thunk.api.post).not.toHaveBeenCalled();
  });

  test("reject: if API return error", async () => {
    (UserSelectors.getUserAuthData as jest.Mock).mockReturnValue(userData);
    (getArticleDetailsData as jest.Mock).mockReturnValue(article);

    const thunk = new TestAsyncThunk(addCommentForArticle);
    thunk.api.post.mockRejectedValue(new Error("Network error"));

    const result = await thunk.callThunk("Test comment");

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("error");
  });

  test("reject: if API return data = undefined", async () => {
    (UserSelectors.getUserAuthData as jest.Mock).mockReturnValue(userData);
    (getArticleDetailsData as jest.Mock).mockReturnValue(article);

    const thunk = new TestAsyncThunk(addCommentForArticle);
    thunk.api.post.mockResolvedValue({});

    const result = await thunk.callThunk("Test comment");

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("error");
  });
});
