// src/components/Hero/Hero.js
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Hero = () => {
  const router = useRouter();

  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.location.href = "#projects";
    }
  };

  return (
    <Section row nopadding id="hero">
      <LeftSection
        as={motion.div}
        variants={heroVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <SectionTitle main center>
          Hi, I'm <br />
          <span style={{ color: "#9cc9e3" }}>Kalyana Tirupathi Rao</span>
          <br />
          Data Engineer & ML Enthusiast
        </SectionTitle>

        <SectionText>
          I build scalable ETL pipelines and machine learning solutions. Skilled
          in Databricks, Azure Data Factory, SQL, and Python—transforming data
          into reliable, actionable insights.
        </SectionText>

        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
          <Button onClick={handleClick}>Explore My Work</Button>
        </motion.div>
      </LeftSection>
    </Section>
  );
};

export default Hero;
