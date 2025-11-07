/* eslint-disable react/jsx-props-no-spreading */
import { memo } from "react";
import { classNames } from "@/shared/lib/ClassNames/classNames";
import cls from "./Icon.module.scss";

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, "onClick">;

interface IconBaseProps extends SvgProps {
  className?: string;
  Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

interface NonClickableIconProps extends IconBaseProps {
  clickable?: false;
}

interface clickableIconProps extends IconBaseProps {
  clickable: true;
  onClick: () => void;
}

type IconProps = NonClickableIconProps | clickableIconProps;

export const Icon = memo((props: IconProps) => {
  const {
    className,
    Svg,
    width = 32,
    height = 32,
    clickable,
    ...otherProps
  } = props;

  const icon = (
    <Svg
      width={width}
      height={height}
      className={classNames(cls.Icon, {}, [className])}
      {...otherProps}
      onClick={undefined}
    />
  );

  if (clickable) {
    return (
      <button
        type="button"
        onClick={props.onClick}
        className={cls.button}
        style={{ height, width }}
      >
        {icon}
      </button>
    );
  }

  return icon;
});
