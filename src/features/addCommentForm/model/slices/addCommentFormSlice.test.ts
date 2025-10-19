import { AddCommentFormSchema } from "../types/addCommentForm";
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "./addCommentFormSlice";

describe("addCommentFormSlice.test", () => {
  test("should return initial state", () => {
    const initialState: AddCommentFormSchema = {
      text: "",
      error: "",
    };
    expect(addCommentFormReducer(undefined, { type: "" })).toEqual(
      initialState,
    );
  });

  test("setText: should update field 'text'", () => {
    const prevState: AddCommentFormSchema = { text: "", error: "" };
    const newText = "Comment text";
    const state = addCommentFormReducer(
      prevState,
      addCommentFormActions.setText(newText),
    );
    expect(state.text).toBe(newText);
  });

  test("setText: shouldn't update field 'error'", () => {
    const prevState: AddCommentFormSchema = { text: "", error: "Error" };
    const newText = "Comment text";
    const state = addCommentFormReducer(
      prevState,
      addCommentFormActions.setText(newText),
    );
    expect(state.error).toBe("Error");
  });
});
