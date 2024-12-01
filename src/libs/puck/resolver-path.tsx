const resolverPath = (paths: string[] = []) => {
  const hasPath = paths.length > 0;

  const isEdit = hasPath ? paths[paths.length - 1] === "edit" : false;

  return {
    isEdit,
    path: `/${(isEdit
      ? [...paths].slice(0, paths.length - 1)
      : [...paths]
    ).join("/")}`,
  };
};

export default resolverPath;
