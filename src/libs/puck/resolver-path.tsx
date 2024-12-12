const resolverPath = (paths: string[] = []) => {
  const hasPath = paths.length > 0;

  const isEdit = hasPath ? paths[paths.length - 1] === "edit" : false;
  const isPreview = hasPath ? paths[paths.length - 1] === "preview" : false;

  const basePath = hasPath
    ? [...paths].slice(0, isEdit || isPreview ? paths.length - 1 : undefined)
    : paths;

  return {
    isEdit,
    isPreview,
    path: `/${basePath.join("/")}`,
  };
};

export default resolverPath;
