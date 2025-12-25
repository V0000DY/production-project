import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Text as TextDeprecated, TextSize } from "@/shared/ui/deprecated/Text";
import { Text } from "@/shared/ui/redesigned/Text";
import { ArticleList } from "@/entities/Article";
import { classNames } from "@/shared/lib/ClassNames/classNames";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { useArticleRecomendationsList } from "../../api/articleRecomendationsApi";
import { ToggleFeatures } from "@/shared/lib/features";

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
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<Text size="l" title={t("Recommendations")} />}
          off={
            <TextDeprecated size={TextSize.L} title={t("Recommendations")} />
          }
        />
        <ArticleList
          articles={articles}
          isLoading={isLoading}
          target="_blank"
        />
      </VStack>
    );
  },
);
