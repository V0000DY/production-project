import { useTranslation } from "react-i18next";
import { memo } from "react";
import { classNames } from "@/shared/lib/ClassNames/classNames";
import { Page } from "@/widgets/Page";
import cls from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <Page
      data-testid="NotFoundPage"
      className={classNames(cls.NotFoundPage, {}, [className])}
    >
      {t("404")}
    </Page>
  );
});
