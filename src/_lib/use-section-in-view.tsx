"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { useActiveContextSection } from "@components/providers/active-section-provider";
import { SectionName } from "./data-type";

export default function useSectionInView(
  sectionName: SectionName,
  threshold: number = 0.75
) {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection } = useActiveContextSection();
  useEffect(() => {
    if (inView) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, sectionName]);

  return { ref };
}
