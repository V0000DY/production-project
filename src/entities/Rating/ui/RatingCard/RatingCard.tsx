/* eslint-disable no-unused-vars */
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { BrowserView, MobileView } from "react-device-detect";
import { Card as CardDeprecated } from "@/shared/ui/deprecated/Card";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { Text as TextDeprecated } from "@/shared/ui/deprecated/Text";
import { StarRating } from "@/shared/ui/deprecated/StarRating";
import { Modal } from "@/shared/ui/redesigned/Modal";
import { Input as InputDeprecated } from "@/shared/ui/deprecated/Input";
import {
  Button as ButtonDeprecated,
  ButtonSize,
  ButtonTheme,
} from "@/shared/ui/deprecated/Button";
import { Drawer } from "@/shared/ui/redesigned/Drawer";
import { ToggleFeatures } from "@/shared/lib/features";
import { Text } from "@/shared/ui/redesigned/Text";
import { Input } from "@/shared/ui/redesigned/Input";
import { Button } from "@/shared/ui/redesigned/Button";
import { Card } from "@/shared/ui/redesigned/Card";

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onAccept,
    onCancel,
    rate = 0,
  } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState("");

  const { t } = useTranslation();

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept],
  );

  const acceptHandler = useCallback(() => {
    onAccept?.(starsCount, feedback);
    setIsModalOpen(false);
  }, [feedback, onAccept, starsCount]);

  const cancelHandler = useCallback(() => {
    onCancel?.(starsCount);
    setIsModalOpen(false);
  }, [onCancel, starsCount]);

  const modalContent = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <>
          <Text title={feedbackTitle} />
          <Input
            placeholder={t("Your feedback")}
            value={feedback}
            onChange={setFeedback}
            data-testid="RatingCard.Input"
          />
        </>
      }
      off={
        <>
          <TextDeprecated title={feedbackTitle} />
          <InputDeprecated
            placeholder={t("Your feedback")}
            value={feedback}
            onChange={setFeedback}
            data-testid="RatingCard.Input"
          />
        </>
      }
    />
  );

  const content = (
    <>
      <VStack align="center" gap="8">
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<Text title={starsCount ? t("Thanks for rating") : title} />}
          off={
            <TextDeprecated
              title={starsCount ? t("Thanks for rating") : title}
            />
          }
        />
        <StarRating
          selectedStars={starsCount}
          onSelect={onSelectStars}
          size={40}
        />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          <VStack max gap="32">
            {modalContent}
            <ToggleFeatures
              feature="isAppRedesigned"
              on={
                <HStack max gap="16" justify="end">
                  <Button
                    onClick={cancelHandler}
                    data-testid="RatingCard.Close"
                  >
                    {t("Cancel")}
                  </Button>
                  <Button onClick={acceptHandler} data-testid="RatingCard.Send">
                    {t("Send")}
                  </Button>
                </HStack>
              }
              off={
                <HStack max gap="16" justify="end">
                  <ButtonDeprecated
                    theme={ButtonTheme.OUTLINE_RED}
                    onClick={cancelHandler}
                    data-testid="RatingCard.Close"
                  >
                    {t("Cancel")}
                  </ButtonDeprecated>
                  <ButtonDeprecated
                    onClick={acceptHandler}
                    data-testid="RatingCard.Send"
                  >
                    {t("Send")}
                  </ButtonDeprecated>
                </HStack>
              }
            />
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
          <VStack gap="32">
            {modalContent}
            <ToggleFeatures
              feature="isAppRedesigned"
              on={
                <Button fullWidth onClick={acceptHandler} size="l">
                  {t("Send")}
                </Button>
              }
              off={
                <ButtonDeprecated
                  fullWidth
                  onClick={acceptHandler}
                  size={ButtonSize.L}
                >
                  {t("Send")}
                </ButtonDeprecated>
              }
            />
          </VStack>
        </Drawer>
      </MobileView>
    </>
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card max padding="24" border="round">
          {content}
        </Card>
      }
      off={
        <CardDeprecated max className={className} data-testid="RatingCard">
          {content}
        </CardDeprecated>
      }
    />
  );
});
