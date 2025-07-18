import { memo } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import { ArticleList, ArticleView } from "entities/Article";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      <ArticleList view={ArticleView.BIG} articles={[]} />
    </div>
  );
};

export default memo(ArticlesPage);
