import { links, experiencesData } from "./data";

export type SectionName = (typeof links)[number]["sectionName"];

export type Experiences = {
  id: number;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
};
