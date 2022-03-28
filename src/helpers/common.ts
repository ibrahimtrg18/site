interface GetInitialOptions {
  separator: string;
  uppercase: boolean;
  combiner: "";
}

export const getInitial = (
  str: string,
  options?: GetInitialOptions
): string => {
  options = options || {
    separator: " ",
    uppercase: true,
    combiner: "",
  };

  if (!str) {
    return "";
  }

  const strSplitted = str.split(options.separator);

  if (options?.uppercase) {
    return strSplitted
      .map((str) => str.charAt(0))
      .join(options.combiner)
      .toUpperCase();
  } else {
    return strSplitted.map((str) => str.charAt(0)).join(options.combiner);
  }
};
