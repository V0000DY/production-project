/* eslint-disable no-unused-vars */
import { memo, ReactNode, useCallback } from "react";
import { classNames } from "@/shared/lib/ClassNames/classNames";
import cls from "./Tabs.module.scss";
import { Card } from "../Card/Card";
import { Flex, FlexDirection } from "../Stack/Flex/Flex";

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
  direction?: FlexDirection;
}

export const Tabs = memo((props: TabsProps) => {
  const { className, tabs, value, onTabClick, direction = "row" } = props;

  const clickHandle = useCallback(
    (tab: TabItem) => () => {
      onTabClick(tab);
    },
    [onTabClick],
  );

  return (
    <Flex
      gap="8"
      direction={direction}
      className={classNames(cls.Tabs, {}, [className])}
      align="start"
    >
      {tabs.map((tab) => {
        const isSelected = tab.value === value;
        return (
          <Card
            key={tab.value}
            variant={isSelected ? "light" : "normal"}
            className={classNames(cls.tab, {
              [cls.selected]: isSelected,
            })}
            onClick={clickHandle(tab)}
            border="round"
          >
            {tab.content}
          </Card>
        );
      })}
    </Flex>
  );
});
