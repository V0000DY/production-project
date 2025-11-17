import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "@/shared/lib/ClassNames/classNames";
import { Dropdown as DropdownDeprecated } from "@/shared/ui/deprecated/Popups";
import {
  getRouteAdminPanel,
  getRouteProfile,
  getRouteSettings,
} from "@/shared/const/router";
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from "@/entities/User";
import { Avatar as AvatarDeprecated } from "@/shared/ui/deprecated/Avatar";
import { ToggleFeatures } from "@/shared/lib/features";
import { Avatar } from "@/shared/ui/redesigned/Avatar";
import { Dropdown } from "@/shared/ui/redesigned/Popups";

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const authData = useSelector(getUserAuthData);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) {
    return null;
  }

  const items = [
    {
      content: t("Settings"),
      href: getRouteSettings(),
    },
    {
      content: t("Profile"),
      href: getRouteProfile(authData.id),
    },
    ...(isAdminPanelAvailable
      ? [{ content: t("Admin"), href: getRouteAdminPanel() }]
      : []),
    { content: t("Exit"), onClick: onLogout },
  ];

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Dropdown
          className={classNames("", {}, [className])}
          items={items}
          trigger={<Avatar size={48} src={authData.avatar} />}
          direction="bottom left"
        />
      }
      off={
        <DropdownDeprecated
          className={classNames("", {}, [className])}
          items={items}
          trigger={
            <AvatarDeprecated fallbackInverted size={2} src={authData.avatar} />
          }
          direction="bottom left"
        />
      }
    />
  );
});
