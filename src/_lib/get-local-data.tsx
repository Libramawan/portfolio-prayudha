import { join } from "path";
import fsPromises from "fs/promises";

export default async function getLocalData() {
  const filePath = join(process.cwd(), "./json/data.json");
  const jsonData = await fsPromises.readFile(filePath, "utf-8");
  const ObjectData = JSON.parse(jsonData);
  return ObjectData;
}
