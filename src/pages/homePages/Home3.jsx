import React from "react";
import BlogV3 from "../../components/blog/BlogV3";
import FeatureV1 from "../../components/feature/FeatureV1";
import WhyChooseUsV3 from "../../components/whyChoose/WhyChooseUsV4";
import ServiceV4 from "../../components/showCase/ShowCaseV1";
import ProjectV2 from "../../components/project/ProjectV2";
import PriceV1 from "../../components/price/PriceV1";
import TestimonialV1 from "../../components/testimonial/TestimonialV1";
import TeamV1 from "../../components/team/TeamV2";
import ContactV1 from "../../components/contact/ContactV1";
import FooterV1 from "../../components/footer/FooterV1";
import BannerV1 from "../../components/banner/BannerV1";
import ServicesV1 from "../../components/services/ServicesV1";
import WorkWithExperts from "../../components/WorkWithExperts";
import TrustedTeams from "../../components/TrustedTeams";
import ProjectInMind from "../../components/ProjectInMind";
import HeaderV6 from "../../components/header/HeaderV6";
import HomeBlogPreview from "../../components/blog/HomeBlogPreview";
import "../../assets/css/header.css";

const Home3 = () => {
  return (
    <>
      <HeaderV6 />
      <BannerV1 />
      <TrustedTeams />
      <ServicesV1 />
      <WorkWithExperts />
      <ProjectV2 />
      <HomeBlogPreview />
      <ProjectInMind />
      <FooterV1 />
    </>
  );
};

export default Home3;
