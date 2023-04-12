import React from 'react';

import { TECHNOLOGIES } from 'constants/technologies';
import SectionWrapper from 'libs/hoc/SectionWrapper';
import BallCanvas from 'components/molecules/BallCanvas';

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {TECHNOLOGIES.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
