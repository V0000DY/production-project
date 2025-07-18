import { HTMLAttributes, memo, ReactNode } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import cls from "./Card.module.scss";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const Card = memo((props: CardProps) => {
  const { className, children, ...otherProps } = props;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={classNames(cls.Card, {}, [className])} {...otherProps}>
      {children}
    </div>
  );
});
