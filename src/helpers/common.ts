interface GetInitialOptions {
  separator?: string;
  uppercase?: boolean;
  combiner?: string;
  exclude?: Array<string>;
}

export const getInitial = (
  str: string,
  options?: GetInitialOptions
): string => {
  options = {
    separator: " ",
    uppercase: true,
    combiner: "",
    ...options,
  };

  if (!str) {
    return "";
  }

  const strSplitted = str.split(options!.separator!);

  const initial = strSplitted
    .map((str) => {
      if (options!.exclude && options!.exclude!.includes(str)) {
        return str;
      }
      return str.charAt(0);
    })
    .join(options!.combiner!);

  if (options!.uppercase!) {
    return initial.toUpperCase();
  } else {
    return initial;
  }
};
