import { memo, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/ClassNames/classNames";
import cls from "./RedesignedSidebar.module.scss";
import { AppLogo } from "@/shared/ui/redesigned/AppLogo";
import { VStack } from "@/shared/ui/deprecated/Stack";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";
import { Icon } from "@/shared/ui/redesigned/Icon";
import ArrowIcon from "@/shared/assets/icons/arrow-bottom.svg";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { LangSwitcher } from "@/features/LangSwitcher";

interface Props {
  className?: string;
}

export const RedesignedSidebar = memo((props: Props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const itemList = useMemo(
    () =>
      sidebarItemsList.map((item) => (
        <SidebarItem item={item} collapsed={collapsed} key={item.path} />
      )),
    [collapsed, sidebarItemsList],
  );

  const onToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <aside
      data-testid="sidebar"
      className={classNames(
        cls.RedesignedSidebar,
        { [cls.collapsedRedesigned]: collapsed },
        [className],
      )}
    >
      <AppLogo size={collapsed ? 32 : 50} className={cls.appLogo} />
      <VStack role="navigation" gap="8" className={cls.items}>
        {itemList}
      </VStack>
      <Icon
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        Svg={ArrowIcon}
        clickable
      />
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </aside>
  );
});
