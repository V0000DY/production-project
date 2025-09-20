/* eslint-disable no-unused-vars */
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { BrowserView, MobileView } from "react-device-detect";
import { Card } from "@/shared/ui/Card";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";
import { StarRating } from "@/shared/ui/StarRating";
import { Modal } from "@/shared/ui/Modal";
import { Input } from "@/shared/ui/Input";
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button";
import { Drawer } from "@/shared/ui/Drawer";

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
    [hasFeedback, onAccept]
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
    <>
      <Text title={feedbackTitle} />
      <Input
        placeholder={t("Your feedback")}
        value={feedback}
        onChange={setFeedback}
      />
    </>
  );

  return (
    <Card max className={className}>
      <VStack align="center" gap="8">
        <Text title={starsCount ? t("Thanks for rating") : title} />
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
            <HStack max gap="16" justify="end">
              <Button theme={ButtonTheme.OUTLINE_RED} onClick={cancelHandler}>
                {t("Cancel")}
              </Button>
              <Button onClick={acceptHandler}>{t("Send")}</Button>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
          <VStack gap="32">
            {modalContent}
            <Button fullWidth onClick={acceptHandler} size={ButtonSize.L}>
              {t("Send")}
            </Button>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  );
});
