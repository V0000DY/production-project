import { CSSProperties, useMemo } from "react";
import { classNames, Mods } from "@/shared/lib/ClassNames/classNames";
import cls from "./Avatar.module.scss";
import { AppImage } from "../../redesigned/AppImage";
import UserIcon from "../../../assets/icons/user-filled.svg";
import { Icon } from "../Icon";
import { Skeleton } from "../Skeleton";

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = ({ className, src, size = 6, alt }: AvatarProps) => {
  const mods: Mods = {};

  const styles = useMemo<CSSProperties>(
    () => ({
      width: `${size}rem`,
      height: `${size}rem`,
    }),
    [size],
  );

  const fallback = <Skeleton border="50%" width={size} height={size} />;
  const errorFallback = (
    <Icon Svg={UserIcon} width={`${size}rem`} height={`${size}rem`} />
  );

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      src={src}
      style={styles}
      className={classNames(cls.Avatar, mods, [className])}
      alt={alt}
    />
  );
};
