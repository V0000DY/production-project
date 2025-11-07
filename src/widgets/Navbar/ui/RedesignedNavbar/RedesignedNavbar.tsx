import { memo } from "react";
import { classNames } from "@/shared/lib/ClassNames/classNames";
import cls from "./RedesignedNavbar.module.scss";
import { HStack } from "@/shared/ui/deprecated/Stack";
import { NotificationButton } from "@/features/notificationButton";
import { AvatarDropdown } from "@/features/avatarDropdown";

interface Props {
  className?: string;
}

export const RedesignedNavbar = memo((props: Props) => {
  const { className } = props;

  return (
    <header className={classNames(cls.RedesignedNavbar, {}, [className])}>
      <HStack gap="16" className={cls.actions}>
        <NotificationButton />
        <AvatarDropdown />
      </HStack>
    </header>
  );
});
