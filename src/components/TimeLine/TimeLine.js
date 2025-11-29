import React from "react";
import { motion } from "framer-motion";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  CarouselContainer,
  CarouselItem,
  CarouselItemTitle,
  CarouselItemText,
} from "./TimeLineStyles";
import { TimeLineData } from "../../constants/constants";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const Timeline = () => {
  return (
    <Section id="timeline">
      <SectionDivider />
      <SectionTitle>My Journey</SectionTitle>

      <CarouselContainer>
        {TimeLineData.map((item, index) => (
          <CarouselItem
            as={motion.div}
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <CarouselItemTitle>{item.year}</CarouselItemTitle>
            <CarouselItemText>{item.text}</CarouselItemText>
          </CarouselItem>
        ))}
      </CarouselContainer>

      <SectionDivider />
    </Section>
  );
};

export default Timeline;
