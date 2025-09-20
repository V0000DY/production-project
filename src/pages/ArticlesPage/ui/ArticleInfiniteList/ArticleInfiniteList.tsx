import { memo } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { ArticleList } from "@/entities/Article";
import { Text } from "@/shared/ui/Text";
import { getArticles } from "../../model/slices/articlesPageSlice";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlePageSelectors";

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const articles = useSelector(getArticles.selectAll);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);
  const isLoading = useSelector(getArticlesPageIsLoading);

  if (error) {
    return <Text text={t("Error while loading articles")} />;
  }

  return (
    <ArticleList
      view={view}
      articles={articles}
      isLoading={isLoading}
      className={className}
    />
  );
});
