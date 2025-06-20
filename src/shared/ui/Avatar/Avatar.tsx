import { CSSProperties, useMemo } from "react";
import { classNames, Mods } from "shared/lib/ClassNames/classNames";
import cls from "./Avatar.module.scss";

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = ({ className, src, size, alt }: AvatarProps) => {
  const mods: Mods = {};

  const styles = useMemo<CSSProperties>(
    () => ({
      width: `${size}rem` || "6rem",
      height: `${size}rem` || "6rem",
    }),
    [size]
  );
  return (
    <img
      src={src}
      style={styles}
      className={classNames(cls.Avatar, mods, [className])}
      alt={alt}
    />
  );
};
