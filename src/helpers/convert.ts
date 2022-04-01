import { ColorEnum, UnitEnum } from "../utils/enums";

interface ConvertSpacingOptions {
  unit: UnitEnum;
}

export const convertSpacing = (
  value: string | number | boolean,
  options?: ConvertSpacingOptions
): string => {
  options = options || {
    unit: UnitEnum.PX,
  };
  switch (typeof value) {
    case "string":
      if (value === "auto") return "auto";
      else return value;
    case "number":
      return value + options.unit;
    default:
      return "auto";
  }
};
