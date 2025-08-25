import { StateSchema } from "@/app/providers/StoreProvider";
import {
  getAddCommentFormText,
  getAddCommentFormError,
} from "./addCommentFormSelectors";

describe("getAddCommentForm.test", () => {
  test("getAddCommentFormText: should return text", () => {
    const text = "Text_test1";
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        text,
      },
    };
    expect(getAddCommentFormText(state as StateSchema)).toEqual(text);
  });

  test("getAddCommentFormError: should return error", () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        error: "error",
      },
    };
    expect(getAddCommentFormError(state as StateSchema)).toEqual("error");
  });

  test("getAddCommentFormText: should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddCommentFormText(state as StateSchema)).toEqual(undefined);
  });

  test("getAddCommentFormError: should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
  });
});
