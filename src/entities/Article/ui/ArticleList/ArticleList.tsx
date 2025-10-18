import { t } from "i18next";
import { HTMLAttributeAnchorTarget, memo } from "react";
import { classNames } from "@/shared/lib/ClassNames/classNames";
import { Text, TextSize } from "@/shared/ui/Text";
import { Article } from "../../model/types/article";
import cls from "./ArticleList.module.scss";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import { ArticleView } from "../../model/consts/articleConsts";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((item, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <ArticleListItemSkeleton key={index} view={view} className={cls.card} />
  ));

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
    target,
  } = props;

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text title={t("No articles")} size={TextSize.L} />
      </div>
    );
  }

  return (
    <div
      className={classNames(cls.ArticleList, {}, [className, cls[view]])}
      data-testid="ArticleList"
    >
      {articles.map((article) => (
        <ArticleListItem
          article={article}
          view={view}
          className={cls.card}
          target={target}
          key={article.id}
        />
      ))}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
