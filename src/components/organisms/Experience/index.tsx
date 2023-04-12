import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import ExperienceCard from 'components/molecules/ExperienceCard';
import { EXPERIENCES } from 'constants/experiences';
import { textVariant } from 'utils/motion';
import SectionWrapper from 'libs/hoc/SectionWrapper';

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`sm:text-[18px] text-[14px] text-gray uppercase tracking-wider text-center`}>
          What I have done so far
        </p>
        <h2
          className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {EXPERIENCES.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
