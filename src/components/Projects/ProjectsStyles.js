import styled from "styled-components";
import { motion } from "framer-motion";

/* ===========================
   Image Styling
=========================== */
export const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
  background: #111;

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 180px;
  }
`;

/* ===========================
   Grid Layout
=========================== */
export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 2.5rem;
  padding: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
`;

/* ===========================
   Card Layout
=========================== */
export const BlogCard = styled(motion.div)`
  border-radius: 12px;
  background: ${({ theme }) => theme.card};
  box-shadow: 0px 6px 20px rgba(15, 22, 36, 0.35);
  text-align: center;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0px 12px 26px rgba(0, 0, 0, 0.35);
  }
`;

/* ===========================
   Titles & Headers
=========================== */
export const TitleContent = styled.div`
  text-align: center;
  width: 100%;
  padding: 1rem 0 0.25rem 0;
`;

export const HeaderThree = styled.h3`
  font-weight: 600;
  color: ${({ theme }) => theme.accent};
  letter-spacing: 1px;
  font-size: 1.7rem;
  padding-bottom: 0.5rem;
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 10px auto;
  border: none;
  border-radius: 3px;
  background: ${({ theme }) => theme.secondary};
`;

/* ===========================
   Card Description
=========================== */
export const CardInfo = styled.p`
  padding: 0 1.5rem;
  margin: 1rem 0;
  color: ${({ theme }) => theme.text};
  font-size: 1.15rem;
  text-align: justify;
  line-height: 1.6;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem 1rem;
  }
`;

/* ===========================
   Utility Links (Code / Source)
=========================== */
export const UtilityList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 1.5rem;
  padding: 0;
`;

export const ExternalLinks = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  padding: 0.7rem 1.4rem;
  background: #6b3030;
  border-radius: 12px;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #9c3a3a;
  }
`;

/* ===========================
   Tags Section
=========================== */
export const TagList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0.7rem 1rem;
  gap: 0.8rem;
`;

export const Tag = styled.li`
  color: #d8bfbf;
  background: rgba(255, 255, 255, 0.08);
  padding: 0.45rem 1rem;
  border-radius: 12px;
  font-size: 0.95rem;
  letter-spacing: 0.2px;
`;
