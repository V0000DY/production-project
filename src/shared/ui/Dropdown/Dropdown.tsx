import { Fragment, ReactNode } from "react";
import { Menu } from "@headlessui/react";
import { DropdownDirection } from "shared/types/ui";
import cls from "./Dropdown.module.scss";
import { classNames } from "../../lib/ClassNames/classNames";
import { AppLink } from "../AppLink/AppLink";

export type DropdownItem = {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
};

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  "top right": cls.optionsTopRight,
  "top left": cls.optionsTopLeft,
  "bottom right": cls.optionsBottomRigh,
  "bottom left": cls.optionsBottomLeft,
};

export function Dropdown(props: DropdownProps) {
  const { className, trigger, items, direction = "bottom right" } = props;
  const menuClasses = [mapDirectionClass[direction]];

  return (
    <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
      <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item, idx) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              onClick={item.onClick}
              className={classNames(cls.item, { [cls.active]: active })}
              disabled={item.disabled}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            );
          }
          return (
            // eslint-disable-next-line react/no-array-index-key
            <Menu.Item as={Fragment} key={idx} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}
