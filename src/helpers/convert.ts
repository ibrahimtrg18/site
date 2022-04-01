export const convertSpacing = (value: string | number | boolean): string => {
  switch (typeof value) {
    case "string":
      if (value === "auto") return "auto";
      else return value;
    case "number":
      return value + "px";
    default:
      return "auto";
  }
};
