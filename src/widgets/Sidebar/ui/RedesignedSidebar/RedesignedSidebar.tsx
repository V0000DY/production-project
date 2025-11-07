import { memo, useState } from "react";
import { classNames } from "@/shared/lib/ClassNames/classNames";
import cls from "./RedesignedSidebar.module.scss";
import { AppLogo } from "@/shared/ui/deprecated/AppLogo";

interface Props {
  className?: string;
}

export const RedesignedSidebar = memo((props: Props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      data-testid="sidebar"
      className={classNames(
        cls.RedesignedSidebar,
        { [cls.collapsed]: collapsed },
        [className],
      )}
    >
      <AppLogo className={cls.appLogo} />
    </aside>
  );
});
