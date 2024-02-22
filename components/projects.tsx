"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { BsArrowRight } from "react-icons/bs";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <div className='mt-10 flex flex-wrap justify-center'>
          <a href="https://factual-vicuna-db4.notion.site/Projects-Gallery-ca02986a668d4816b43ab22435f515a7?pvs=18" target="_blank">Explore more projects here <BsArrowRight className='inline-block'/></a>
      </div>
    </section>
  );
}
