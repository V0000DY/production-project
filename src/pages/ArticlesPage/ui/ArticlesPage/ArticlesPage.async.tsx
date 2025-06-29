import { lazy } from "react";

export const ArticlesPageAsync = lazy(
  () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    new Promise(
      (resolve) =>
        // @ts-ignore
        // eslint-disable-next-line no-promise-executor-return, implicit-arrow-linebreak
        setTimeout(() => resolve(import("./ArticlesPage")), 2000)
      // eslint-disable-next-line function-paren-newline
    )
);
