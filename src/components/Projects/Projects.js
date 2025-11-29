import React from "react";
import { motion } from "framer-motion";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>

    <GridContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {projects.map((p, i) => (
        <BlogCard
          as={motion.div}
          key={i}
          variants={cardVariants}
          whileHover={{
            y: -8,
            boxShadow: "0px 12px 25px rgba(0,0,0,0.35)",
          }}
        >
          <Img
            src={p.image || "/images/default.png"}
            alt={p.title}
            onError={(e) => (e.target.src = "/images/default.png")}
          />

          <TitleContent>
            <HeaderThree>{p.title}</HeaderThree>
            <Hr />
          </TitleContent>

          <CardInfo>{p.description}</CardInfo>

          <TitleContent>Stack</TitleContent>

          <TagList>
            {Array.isArray(p.tags) &&
              p.tags.map((t, index) => <Tag key={index}>{t}</Tag>)}
          </TagList>

          <UtilityList>
            <ExternalLinks href={p.visit} target="_blank">
              Code
            </ExternalLinks>
            <ExternalLinks href={p.source} target="_blank">
              Source
            </ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;