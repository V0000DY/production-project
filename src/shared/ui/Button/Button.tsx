import { classNames } from "shared/lib/ClassNames/classNames";
import { ButtonHTMLAttributes, FC } from "react";
import cls from "./Button.module.scss";

export enum ButtonTheme {
  // eslint-disable-next-line no-unused-vars
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInvertred",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    square,
    disabled,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled,
  };

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className, cls[theme]])}
      disabled={disabled}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {children}
    </button>
  );
};
