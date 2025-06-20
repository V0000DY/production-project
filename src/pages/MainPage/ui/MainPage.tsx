import { memo } from "react";
import { useTranslation } from "react-i18next";

const MainPage = memo(() => {
  const { t } = useTranslation();

  return <div>{t("mainPage")}</div>;
});

export default MainPage;
