import { Helmet } from 'react-helmet';

import About from 'components/organisms/About';
import Contact from 'components/organisms/Contact';
import Experience from 'components/organisms/Experience';
import Hero from 'components/organisms/Hero';
import Tech from 'components/organisms/Tech';
import Work from 'components/organisms/Work';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Chi Nguyen Portfolio</title>
      </Helmet>

      <div>
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Work />
        <Contact />
      </div>
    </>
  );
}
