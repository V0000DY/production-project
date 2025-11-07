import { DropdownDirection } from "../../../../types/ui";
import cls from "./popup.module.scss";

export const mapDirectionClass: Record<DropdownDirection, string> = {
  "top right": cls.optionsTopRight,
  "top left": cls.optionsTopLeft,
  "bottom right": cls.optionsBottomRigh,
  "bottom left": cls.optionsBottomLeft,
};
