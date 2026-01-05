/* eslint-disable no-unused-vars */
import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import { classNames, Mods } from "@/shared/lib/ClassNames/classNames";
import cls from "./Button.module.scss";

export type ButtonVariant = "clear" | "outline" | "filled";
export type ButtonColor = "normal" | "success" | "error";

export type ButtonSize = "m" | "l" | "xl";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  /**
   * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный приложения цвет и т.д.)
   */
  variant?: ButtonVariant;
  /**
   * Флаг, делающий кнопку квадратной
   */
  square?: boolean;
  /**
   * Размер кнопки
   */
  size?: ButtonSize;
  /**
   * Флаг, делающий кнопку неактивной
   */
  disabled?: boolean;
  /**
   * Контент кнопки
   */
  children?: ReactNode;
  /**
   * Флаг, делающий кнопку широкой
   */
  fullWidth?: boolean;
  /**
   * Цвет кнопки
   */
  color?: ButtonColor;
  /**
   * Дополнительный контент слева и справа от основного
   */
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    variant = "outline",
    square,
    disabled,
    fullWidth,
    color = "normal",
    size = "m",
    addonLeft,
    addonRight,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
    [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
  };

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [
        className,
        cls[variant],
        cls[size],
        cls[color],
      ])}
      disabled={disabled}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
      {children}
      {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
    </button>
  );
});
