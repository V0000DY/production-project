import { FC, lazy } from "react";
import { AddCommentFormProps } from "./AddCommentForm";

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(
  () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    new Promise(
      (resolve) =>
        // @ts-ignore
        // eslint-disable-next-line no-promise-executor-return, implicit-arrow-linebreak
        setTimeout(() => resolve(import("./AddCommentForm")), 2000)
      // eslint-disable-next-line function-paren-newline
    )
);
