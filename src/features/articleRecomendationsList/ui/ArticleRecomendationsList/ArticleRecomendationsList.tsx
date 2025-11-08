import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Text, TextSize } from "@/shared/ui/deprecated/Text";
import { ArticleList } from "@/entities/Article";
import { classNames } from "@/shared/lib/ClassNames/classNames";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { useArticleRecomendationsList } from "../../api/articleRecomendationsApi";

interface ArticleRecomendationsListProps {
  className?: string;
}

export const ArticleRecomendationsList = memo(
  (props: ArticleRecomendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {
      data: articles,
      isLoading,
      error,
    } = useArticleRecomendationsList(3);

    if (isLoading || error || !articles) {
      return null;
    }

    return (
      <VStack
        gap="8"
        className={classNames("", {}, [className])}
        data-testid="ArticleRecomendationsList"
      >
        <Text size={TextSize.L} title={t("Recommendations")} />
        <ArticleList
          articles={articles}
          isLoading={isLoading}
          target="_blank"
        />
      </VStack>
    );
  },
);
