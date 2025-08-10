import { ReactNode, Fragment } from "react";
import { Listbox as HListBox } from "@headlessui/react";
import { DropdownDirection } from "shared/types/ui";
import cls from "./ListBox.module.scss";
import { classNames } from "../../lib/ClassNames/classNames";
import { Button } from "../Button/Button";
import { HStack } from "../Stack";

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  "top right": cls.optionsTopRight,
  "top left": cls.optionsTopLeft,
  "bottom right": cls.optionsBottomRigh,
  "bottom left": cls.optionsBottomLeft,
};

export function ListBox(props: ListBoxProps) {
  const {
    className,
    items,
    onChange,
    value,
    defaultValue,
    readonly,
    direction = "bottom right",
    label,
  } = props;

  const optionsClasses = [mapDirectionClass[direction]];

  return (
    <HStack gap="4">
      {label && <span>{`${label}>`}</span>}
      <HListBox
        disabled={readonly}
        as="div"
        className={classNames(cls.ListBox, {}, [className])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button disabled={readonly} className={cls.trigger}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </HListBox.Button>
        <HListBox.Options
          className={classNames(cls.options, {}, optionsClasses)}
        >
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, {
                    [cls.active]: active,
                    [cls.disabled]: item.disabled,
                  })}
                >
                  {selected && "!!!"}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
}
