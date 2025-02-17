import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio@Kalyana Tirupathi Rao
        </SectionTitle>
        <SectionText>
        The purpose of Python Machine Learning is to empower individuals with the skills to harness the power of data, develop intelligent models, and solve real-world problems using cutting-edge machine learning techniques
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;