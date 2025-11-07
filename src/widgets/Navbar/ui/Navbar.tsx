/* eslint-disable react/jsx-wrap-multilines */
import { useTranslation } from "react-i18next";
import { memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/ClassNames/classNames";
import { LoginModal } from "@/features/AuthByUsername";
import { Button, ButtonTheme } from "@/shared/ui/deprecated/Button";
import { getUserAuthData } from "@/entities/User";
import { Text, TextTheme } from "@/shared/ui/deprecated/Text";
import { AppLink, AppLinkTheme } from "@/shared/ui/deprecated/AppLink";
import { getRouteArticleCreate } from "@/shared/const/router";
import { AvatarDropdown } from "@/features/avatarDropdown";
import { HStack } from "@/shared/ui/deprecated/Stack";
import { NotificationButton } from "@/features/notificationButton";
import cls from "./Navbar.module.scss";
import { ToggleFeatures } from "@/shared/lib/features";
import { RedesignedNavbar } from "./RedesignedNavbar/RedesignedNavbar";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  if (authData) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<RedesignedNavbar />}
        off={
          <header className={classNames(cls.Navbar, {}, [className])}>
            <Text
              className={cls.appName}
              title={t("AppName")}
              theme={TextTheme.INVERTED}
            />
            <AppLink
              to={getRouteArticleCreate()}
              theme={AppLinkTheme.SECONDARY}
              className={cls.createLink}
            >
              {t("Create article")}
            </AppLink>
            <HStack gap="16" className={cls.actions}>
              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          </header>
        }
      />
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t("Enter")}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </header>
  );
});
