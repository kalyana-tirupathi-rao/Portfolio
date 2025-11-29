import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const achievements = [
  { number: "4+", text: "Major Data Engineering Projects" },
  { number: "1000+", text: "LinkedIn Followers" },
  { number: "19000+", text: "Quora Views" },
];

const Acomplishments = () => (
  <Section id="about">
    <SectionDivider />
    <SectionTitle>About Me</SectionTitle>

    <SectionText>
      I am a Data Engineer with hands-on experience in Databricks, Azure Data
      Factory, SQL, and Machine Learning. I build scalable ETL pipelines,
      automate workflows, and transform complex datasets into reliable and
      actionable insights. Passionate about data-driven problem-solving and
      engineering systems that deliver business value.
    </SectionText>

    <SectionTitle style={{ marginTop: "2.5rem" }}>
      Personal Achievements
    </SectionTitle>

    <Boxes>
      {achievements.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>

    <SectionDivider />
  </Section>
);

export default Acomplishments;