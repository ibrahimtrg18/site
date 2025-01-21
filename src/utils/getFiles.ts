import fs from "fs";

const getFiles = (folderPath: string, prefix = ""): string[] => {
  return fs.readdirSync(folderPath).map((file) => prefix + file);
};

export default getFiles;
