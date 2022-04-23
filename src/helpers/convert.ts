import { theme, ThemeColor } from "../styles";
import { ColorEnum, UnitEnum } from "../utils";

interface ConvertSpacingOptions {
  unit?: UnitEnum;
}

export const convertSpacing = (
  value: string | number | boolean,
  options?: ConvertSpacingOptions
): string => {
  options = {
    unit: UnitEnum.PX,
    ...options,
  };
  switch (typeof value) {
    case "string":
      if (value === "auto") return "auto";
      else return value;
    case "number":
      return value + options!.unit!;
    default:
      return "auto";
  }
};

interface ConvertColorOptions {
  unit?: ColorEnum;
}

export const convertColor = (
  value: string | ThemeColor,
  options?: ConvertColorOptions
) => {
  options = {
    unit: ColorEnum.HEX,
    ...options,
  };
  switch (options.unit) {
    case ColorEnum.HEX:
      if (value.toString().startsWith("#")) {
        return value;
      }
      return "#" + value;
    case ColorEnum.RGB:
      if (value.toString().startsWith("rgb")) {
        return value;
      }
      return `rgb(${value})`;
    case ColorEnum.RGBA:
      if (value.toString().startsWith("rgba")) {
        return value;
      }
      return `rgba(${value})`;
    case ColorEnum.HSL:
      if (value.toString().startsWith("hsl")) {
        return value;
      }
      return `hsl(${value})`;
    case ColorEnum.HSLA:
      if (value.toString().startsWith("hsla")) {
        return value;
      }
      return `hsla(${value})`;
    default:
      return theme.color[value.toString()];
  }
};
