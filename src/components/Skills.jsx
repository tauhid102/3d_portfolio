import React from "react";
import { motion } from "framer-motion";

import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const skillCategories = [
  {
    title: "Automation",
    icon: "⚙️",
    gradient: "from-[#6366f1] to-[#8b5cf6]",
    skills: [
      "Automated Testing",
      "Regression & Performance Testing",
      "API Testing (Postman, Newman)",
      "Selenium",
      "Cypress",
      "JMeter",
      "Load Testing",
      "Test Automation Frameworks (POM, Data-Driven, BDD)",
    ],
  },
  {
    title: "Manual Testing",
    icon: "🔍",
    gradient: "from-[#06b6d4] to-[#3b82f6]",
    skills: [
      "Manual Testing",
      "Test Case Writing",
      "Test Scenario Design",
      "Test Execution",
      "Exploratory Testing",
      "Smoke & Sanity Testing",
      "Cross-Browser Testing",
    ],
  },
  {
    title: "Programming & Frontend",
    icon: "💻",
    gradient: "from-[#f59e0b] to-[#ef4444]",
    skills: [
      "JavaScript",
      "Java",
      "React.js",
      "Redux",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Platforms & Tools",
    icon: "🛠️",
    gradient: "from-[#10b981] to-[#059669]",
    skills: [
      "Jira",
      "Trello",
      "Excel",
      "Notion",
      "Zephyr",
      "Xmind",
      "Chrome DevTools",
      "Figma",
    ],
  },
];

const SkillCard = ({ category, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className='flex-1 min-w-[280px] max-w-[360px]'
    >
      <div className='bg-tertiary rounded-2xl p-6 h-full border border-white/5 hover:border-white/10 transition-colors'>
        <div className='flex items-center gap-3 mb-5'>
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-xl`}
          >
            {category.icon}
          </div>
          <h3 className='text-white font-bold text-[20px]'>
            {category.title}
          </h3>
        </div>

        <div className='flex flex-wrap gap-2'>
          {category.skills.map((skill) => (
            <span
              key={skill}
              className='px-3 py-1.5 text-[13px] text-secondary bg-black-100 rounded-full border border-white/5 hover:text-white hover:border-white/20 transition-colors'
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I bring</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        A well-rounded skill set spanning test automation, manual QA,
        programming, and industry-standard tools — built through hands-on
        experience across fintech, e-commerce, and enterprise applications.
      </motion.p>

      <div className='mt-14 flex flex-wrap justify-center gap-7'>
        {skillCategories.map((category, index) => (
          <SkillCard key={category.title} category={category} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
