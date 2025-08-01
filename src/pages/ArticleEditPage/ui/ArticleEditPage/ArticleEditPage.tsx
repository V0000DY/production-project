import { memo } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page/Page";
import { useParams } from "react-router-dom";
import cls from "./ArticleEditPage.module.scss";

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
      {isEdit ? `${t("Edit article")} ${id}` : t("Create article")}
    </Page>
  );
});

export default ArticleEditPage;
