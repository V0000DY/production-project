import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "@/shared/lib/ClassNames/classNames";
import { Dropdown } from "@/shared/ui/Popups";
import { getRouteAdminPanel, getRouteProfile } from "@/shared/const/router";
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from "@/entities/User";
import { Avatar } from "@/shared/ui/Avatar";

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

  return (
    <Dropdown
      className={classNames("", {}, [className])}
      items={[
        ...(isAdminPanelAvailable
          ? [{ content: t("Admin"), href: getRouteAdminPanel() }]
          : []),
        { content: t("Exit"), onClick: onLogout },
        {
          content: t("Profile"),
          href: getRouteProfile(authData.id),
        },
      ]}
      trigger={<Avatar fallbackInverted size={2} src={authData.avatar} />}
      direction="bottom left"
    />
  );
});
