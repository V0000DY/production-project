/* eslint-disable no-unused-vars */
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { BrowserView, MobileView } from "react-device-detect";
import { classNames } from "@/shared/lib/ClassNames/classNames";
import cls from "./RatingCard.module.scss";
import { Card } from "@/shared/ui/Card/Card";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text/Text";
import { StarRating } from "@/shared/ui/StarRating/StarRating";
import { Modal } from "@/shared/ui/Modal/Modal";
import { Input } from "@/shared/ui/Input/Input";
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button/Button";
import { Drawer } from "@/shared/ui/Drawer/Drawer";

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const { className, title, feedbackTitle, hasFeedback, onAccept, onCancel } =
    props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starCount, setStarCount] = useState(0);
  const [feedback, setFeedback] = useState("");

  const { t } = useTranslation();

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarCount(selectedStarsCount);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept]
  );

  const acceptHandler = useCallback(() => {
    onAccept?.(starCount, feedback);
    setIsModalOpen(false);
  }, [feedback, onAccept, starCount]);

  const cancelHandler = useCallback(() => {
    onCancel?.(starCount);
    setIsModalOpen(false);
  }, [onCancel, starCount]);

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
    <Card className={classNames(cls.RatingCard, {}, [className])}>
      <VStack align="center" gap="8">
        <Text title={title} />
        <StarRating onSelect={onSelectStars} size={40} />
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
