import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";
import { Article } from "@/entities/Article";
import { ArticleDetailsRecommendationsSchema } from "../types/ArticleDetailsRecommendationsSchema";
import { fetchArticlesRecommendations } from "../services/fetchArticleRecommendations/fetchArticleRecommendations";

const recomendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticleRecommendations =
  recomendationsAdapter.getSelectors<StateSchema>(
    (state) =>
      state.articleDetailsPage?.recommendations ||
      recomendationsAdapter.getInitialState()
  );

const articleDetailsRecommendationsSlice = createSlice({
  name: "articleDetailsPageRecommendationsSlice",
  initialState:
    recomendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
      isLoading: false,
      error: undefined,
      ids: [],
      entities: {},
    }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesRecommendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticlesRecommendations.fulfilled, (state, action) => {
        state.isLoading = false;
        recomendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticlesRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsRecommendationsReducer } =
  articleDetailsRecommendationsSlice;
