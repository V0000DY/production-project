import { memo } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import { useTranslation } from "react-i18next";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation();

  return <div className={classNames(cls.ArticlesPage, {}, [className])} />;
};

export default memo(ArticlesPage);
