/* eslint-disable no-unused-vars */
import { HTMLAttributes, memo, ReactNode } from "react";
import { classNames } from "@/shared/lib/ClassNames/classNames";
import cls from "./Card.module.scss";

export enum CardTheme {
  NORMAL = "normal",
  OUTLINED = "outlined",
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
  max?: boolean;
}

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    theme = CardTheme.NORMAL,
    max,
    ...otherProps
  } = props;

  return (
    <div
      className={classNames(cls.Card, { [cls.max]: max }, [
        className,
        cls[theme],
      ])}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {children}
    </div>
  );
});
