import { classNames } from "shared/lib/ClassNames/classNames";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page/Page";
import { memo } from "react";
import cls from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <Page className={classNames(cls.NotFoundPage, {}, [className])}>
      {t("404")}
    </Page>
  );
});
