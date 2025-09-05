import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RatingCard } from "@/entities/Rating";
import { getUserAuthData } from "@/entities/User";
import {
  useGetArticleRating,
  useRateArticle,
} from "../../api/articleRatingApi";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId } = props;
  const { t } = useTranslation();

  const userData = useSelector(getUserAuthData);

  const { data, isLoading } = useGetArticleRating({
    userId: userData?.id ?? "",
    articleId,
  });

  const [rateArticleMutation] = useRateArticle();

  const rating = data?.[0];

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateArticleMutation({
          userId: userData?.id ?? "",
          articleId,
          rate: starsCount,
          feedback,
        });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    },
    [articleId, rateArticleMutation, userData?.id]
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount, feedback);
    },
    [handleRateArticle]
  );

  const onCancel = useCallback(
    (starsCount: number) => {
      handleRateArticle(starsCount);
    },
    [handleRateArticle]
  );

  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
  }

  return (
    <RatingCard
      onAccept={onAccept}
      onCancel={onCancel}
      rate={rating?.rate}
      className={className}
      title={t("ArticleRating_title")}
      feedbackTitle={t("ArticleRating_feedback")}
      hasFeedback
    />
  );
});

export default ArticleRating;
