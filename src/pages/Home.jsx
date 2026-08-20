import React from "react";
import Hero from "../components/home/Hero.jsx";
import StatBand from "../components/home/StatBand.jsx";
import ServicesGrid from "../components/home/ServicesGrid.jsx";
import ProofStrip from "../components/home/ProofStrip.jsx";
import SpecialtiesGrid from "../components/home/SpecialtiesGrid.jsx";
import TestimonialWall from "../components/home/TestimonialWall.jsx";
import BlogTeaser from "../components/home/BlogTeaser.jsx";
import IntegrationWall from "../components/home/IntegrationWall.jsx";
import FaqAccordion from "../components/FaqAccordion.jsx";
import FinalCta from "../components/FinalCta.jsx";
import { HOME_FAQS } from "../data/content.js";

const Home = () => (
  <>
    <Hero />
    <StatBand />
    <ServicesGrid />
    <ProofStrip />
    <SpecialtiesGrid />
    <TestimonialWall />
    <BlogTeaser />
    <IntegrationWall />
    <FaqAccordion
      faqs={HOME_FAQS}
      tag="FAQ"
      title="Operational questions, answered directly."
    />
    <FinalCta />
  </>
);

export default Home;
