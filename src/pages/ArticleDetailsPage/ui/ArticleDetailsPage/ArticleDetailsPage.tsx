import { memo } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/ClassNames/classNames";
import { ArticleDetails } from "@/entities/Article";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Page } from "@/widgets/Page";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { ArticleRecomendationsList } from "@/features/articleRecomendationsList";
import cls from "./ArticleDetailsPage.module.scss";
import { articleDetailsPageReducers } from "../../model/slices";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { ArticleDetailsComments } from "../ArticleDetailsComments/ArticleDetailsComments";
import { ArticleRating } from "@/features/articleRating";
import { ToggleFeatures } from "@/shared/lib/features";
import { Card } from "@/shared/ui/deprecated/Card";
import { StickyContentLayout } from "@/shared/layouts/StickyContentLayout";
import { DetailsContainer } from "../DetailsContainer/DetailsContainer";
import { AdditionalInfoContainer } from "../AdditionalInfoContainer/AdditionalInfoContainer";

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducers,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  // const articleRatingCard = <ArticleRating articleId={id} />;

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <StickyContentLayout
            content={
              <Page
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
              >
                <VStack gap="16" max>
                  <DetailsContainer />
                  <ArticleRating articleId={id} />
                  <ArticleRecomendationsList />
                  <ArticleDetailsComments id={id} />
                </VStack>
              </Page>
            }
            right={<AdditionalInfoContainer />}
          />
        }
        off={
          <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <VStack gap="16" max>
              <ArticleDetailsPageHeader />
              <ArticleDetails id={id} />
              <ToggleFeatures
                feature="isArticleRatingEnabled"
                on={<ArticleRating articleId={id} />}
                off={<Card>{t("Article rating will come soon")}</Card>}
              />
              <ArticleRecomendationsList />
              <ArticleDetailsComments id={id} />
            </VStack>
          </Page>
        }
      />
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
