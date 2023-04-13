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
        <p className={`sm:text-[18px] text-[14px] text-gray uppercase tracking-wider`}>
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
        I am a junior software engineer with understanding a solid foundation of knowledge about
        structured data, algorithms and programming methods. Besides, I can use some programing
        languages and frameworks to build some kinds of applications like desktop app or web app.{' '}
        <br />
        Learning new languages and technologies is what I am passionate about. I am considered a
        team-player because I like to share each other and tend to work well within the group.
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
