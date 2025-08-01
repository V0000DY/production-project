import { combineReducers } from "@reduxjs/toolkit";
import { ArticleDetailsPageSchema } from "../types";
import { articleDetailsRecommendationsReducer } from "./articleDetailsRecommendationsSlice";
import { articleDetailsCommentsReducer } from "./articleDetailsCommentsSlice";

export const articleDetailsPageReducers =
  combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
  });
