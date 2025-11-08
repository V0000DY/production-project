import { CSSProperties, memo } from "react";
import { classNames } from "@/shared/lib/ClassNames/classNames";
import cls from "./Skeleton.module.scss";

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
  const { className, height, width, border } = props;

  const styles: CSSProperties = {
    height: `${height}rem`,
    width: `${width}rem`,
    borderRadius: border,
  };

  return (
    <div className={classNames(cls.Skeleton, {}, [className])} style={styles} />
  );
});
