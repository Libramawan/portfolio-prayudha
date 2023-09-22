import { links } from "./data";

export type SectionName = (typeof links)[number]["sectionName"];

export type Experiences = {
  id: number;
  title: string;
  date: string;
  coverImage: string;
  icons?: string[];
  excerpt: string;
};
