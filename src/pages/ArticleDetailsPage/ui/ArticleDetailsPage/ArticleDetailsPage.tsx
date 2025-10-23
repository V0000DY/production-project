import { memo } from "react";
import { useParams } from "react-router-dom";
import { classNames } from "@/shared/lib/ClassNames/classNames";
import { ArticleDetails } from "@/entities/Article";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Page } from "@/widgets/Page";
import { VStack } from "@/shared/ui/Stack";
import { ArticleRecomendationsList } from "@/features/articleRecomendationsList";
import cls from "./ArticleDetailsPage.module.scss";
import { articleDetailsPageReducers } from "../../model/slices";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { ArticleDetailsComments } from "../ArticleDetailsComments/ArticleDetailsComments";
import { ArticleRating } from "@/features/articleRating";
import { getFeatureFlags } from "@/shared/lib/features";
import { Counter } from "@/entities/Counter";

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducers,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const isArticleRatingEnabled = getFeatureFlags("isArticleRatingEnabled");
  const isCounterEnabled = getFeatureFlags("isCounterEnabled");

  if (!id) {
    return null;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <VStack gap="16" max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          {isCounterEnabled && <Counter />}
          {isArticleRatingEnabled && <ArticleRating articleId={id} />}
          <ArticleRecomendationsList />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
