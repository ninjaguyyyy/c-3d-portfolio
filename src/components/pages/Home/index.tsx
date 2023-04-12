import About from 'components/organisms/About';
import Experience from 'components/organisms/Experience';
import Hero from 'components/organisms/Hero';
import Tech from 'components/organisms/Tech';
import Work from 'components/organisms/Work';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Work />
    </div>
  );
}
