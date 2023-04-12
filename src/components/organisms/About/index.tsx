import React from 'react';
import { motion } from 'framer-motion';

import ServiceCard from 'components/molecules/ServiceCard';
import { fadeIn, textVariant } from 'utils/motion';
import SectionWrapper from 'libs/hoc/SectionWrapper';
import { SERVICES } from 'constants/services';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider`}>
          Introduction
        </p>
        <h2
          className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-gray text-[17px] max-w-3xl leading-[30px]">
        I am a skilled software developer with experience in TypeScript and JavaScript, and
        expertise in frameworks like React, Node.js, and Three.js. I am a quick learner and
        collaborate closely with clients to create efficient, scalable, and user-friendly solutions
        that solve real-world problems. Let&apos;s work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-24 justify-center">
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
