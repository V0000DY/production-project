import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page/Page";
import { RatingCard } from "@/entities/Rating";

const MainPage = memo(() => {
  const { t } = useTranslation();

  return (
    <Page>
      {t("mainPage")}
      <RatingCard
        title={t("Article_rating")}
        feedbackTitle={t("Article_feedback")}
        hasFeedback
      />
    </Page>
  );
});

export default MainPage;
