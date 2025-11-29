import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>

      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </>
  );
};

export default Home;