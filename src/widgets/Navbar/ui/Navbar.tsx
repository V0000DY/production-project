import { classNames } from "shared/lib/ClassNames/classNames";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(cls.Navbar, {}, [className])}>
    <div className={cls.links}>/</div>
  </div>
);
