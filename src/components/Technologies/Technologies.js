import React from "react";
import { DiDatabase, DiPython } from "react-icons/di";
import { FaTools } from "react-icons/fa";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I specialize in data engineering, analytics, and machine learning — 
      with strong hands-on experience across modern data platforms, pipelines,
      and model development workflows.
    </SectionText>

    <List>
      {/* =======================
          DATA ENGINEERING
      ======================= */}
      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Data Engineering</ListTitle>
          <ListParagraph>
            Databricks <br />
            Azure Data Factory <br />
            Teradata, SQL Server <br />
            Azure Data Lake <br />
            ETL Pipelines & Workflow Automation
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* =======================
          MACHINE LEARNING
      ======================= */}
      <ListItem>
        <DiPython size="3rem" />
        <ListContainer>
          <ListTitle>Machine Learning</ListTitle>
          <ListParagraph>
            Python (Pandas, NumPy) <br />
            Scikit-learn, TensorFlow <br />
            Data Preprocessing & Modeling <br />
            Predictive Analytics Projects
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* =======================
         TOOLS & VISUALIZATION
      ======================= */}
      <ListItem>
        <FaTools size="3rem" />
        <ListContainer>
          <ListTitle>Tools & Visualization</ListTitle>
          <ListParagraph>
            Power BI, Tableau <br />
            GitHub, Excel, Google Workspace <br />
            VS Code, Databricks Notebooks
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;