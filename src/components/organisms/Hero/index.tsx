import MouseScrollAnimation from 'components/atoms/MouseScrollAnimation';
import ComputersCanvas from 'components/molecules/Computer';
import HeroInfo from 'components/molecules/HeroInfo';

export default function Hero() {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <HeroInfo />
      <ComputersCanvas />
      <MouseScrollAnimation />
    </section>
  );
}
