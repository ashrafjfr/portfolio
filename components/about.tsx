"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
            Welcome to my portfolio! I am a{" "}<span className='font-medium'>dedicated and innovative</span> individual with a{" "}<span className='font-medium'> passion to create cutting-edge products</span>. My background includes valuable stints at both a{" "}<span className='italic'>Venture Capital</span> firm in Singapore, where I honed my skills as a{" "}<span className='font-medium'>  Product Manager</span>, and a {" "}<span className='italic'> Silicon Valley-based MedTech Startup</span>, where I contributed as a{" "}<span className='font-medium'>Software Engineer, Hardware and Electronics Engineer and UI/UX Designer</span>. These diverse roles have not only deepened my understanding of product development but also exposed me to the intricacies of the{" "}<span className='underline'>startup ecosystem</span> which I enjoy being a part of.
      </p>
    </motion.section>
  );
}
