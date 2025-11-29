// src/components/Footer/Footer.js
import React from "react";
import { motion } from "framer-motion";
import { FooterContainer, FooterWrapper, FooterText, FooterEmail } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainer
      as={motion.footer}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <FooterWrapper className="container">
        <FooterText>© {new Date().getFullYear()} Kalyana Tirupathi Rao</FooterText>

        <FooterEmail href="mailto:kalyanatirupathirao@gmail.com">
          kalyanatirupathirao@gmail.com
        </FooterEmail>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
