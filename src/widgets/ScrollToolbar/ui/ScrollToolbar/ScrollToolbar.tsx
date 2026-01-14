import { memo } from "react";
import { classNames } from "@/shared/lib/ClassNames/classNames";
import cls from "./ScrollToolbar.module.scss";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { ScrollToTopButton } from "@/features/ScrollToTopButton";

interface ScrollToolbarProps {
  className?: string;
}

export const ScrollToolbar = memo((props: ScrollToolbarProps) => {
  const { className } = props;

  return (
    <VStack
      max
      justify="center"
      align="center"
      className={classNames(cls.ScrollToolbar, {}, [className])}
    >
      <ScrollToTopButton />
    </VStack>
  );
});
