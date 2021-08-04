import fs from "fs";
import { join } from "path";
import YAML from "yaml";
import { Tag } from "../../interfaces/tag.interface";
import { isObject } from "./validators";

const pathTags = join(process.cwd(), "meta", "tags.yml");

const fileTags = fs.readFileSync(pathTags, "utf8");

export const getAllTags = (): Tag[] => {
  const parsedTags = YAML.parse(fileTags);
  if (parsedTags && isObject(parsedTags)) {
    const tags = parsedTags["tags"];
    if (Array.isArray(tags)) {
      return tags;
    }
  }
  return [];
};

export const generateTagMap = (): { [key: string]: string } => {
  const tags = getAllTags();
  let result: { [key: string]: string } = {};
  for (const tag of tags) {
    result[tag.slug] = tag.name;
  }
  return result;
};
/*
const tagMap: { [key: string]: TagContent } = generateTagMap();

function generateTagMap(): { [key: string]: TagContent } {
  let result: { [key: string]: TagContent } = {};
  for (const tag of tags.tags) {
    result[tag.slug] = tag;
  }
  return result;
}

export function getTag(slug: string) {
  return tagMap[slug];
}

export function listTags(): TagContent[] {
  return tags.tags;
}
*/
