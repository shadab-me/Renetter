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
import SeoHelmet from "../../components/SeoHelmet";
import AiMetadata from "../../components/AiMetadata";
import AiFaq from "../../components/AiFaq";
import AiDescription from "../../components/AiDescription";
import AiSynonymHandler from "../../components/AiSynonymHandler";
import "../../assets/css/header.css";
import BannerV4 from "../../components/banner/BannerV4";
import SingleBannerV4 from "../../components/banner/SingleBannerV4";

const Home3 = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "RENETTER AGENCY",
    description:
      "Leading digital solutions provider in Moradabad offering web development, mobile apps, and AI solutions for businesses.",
    url: "https://renetter.com",
    logo: "https://renetter.com/img/logo/logo.png",
    image: "https://renetter.com/img/logo/logo.png",
    telephone: "+919XXXXXXXXX",
    email: "info@renetter.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Civil Lines",
      addressLocality: "Moradabad",
      addressRegion: "Uttar Pradesh",
      postalCode: "244001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.8386",
      longitude: "78.7733",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    areaServed: ["Moradabad", "Sambhal", "Rampur", "Amroha", "Bijnor"],
  };

  return (
    <>
      <SeoHelmet
        title="RENETTER AGENCY - Top Digital Solutions Provider in Moradabad"
        description="Leading digital solutions agency in Moradabad offering web development, mobile apps, digital marketing and AI solutions. Serving Moradabad, Sambhal, Rampur and nearby areas."
        keywords="web development Moradabad, digital marketing Moradabad, AI solutions UP, mobile apps Moradabad, digital agency Moradabad, web design UP, IT services Moradabad, Renator agency, Renetter"
        ogUrl="https://renetter.com"
        ogImage="/img/logo/logo.png"
        canonicalUrl="https://renetter.com"
        schema={localBusinessSchema}
      />
      <AiMetadata
        altNames={[
          "Renator Agency",
          "Renetter",
          "Renator",
          "Renetter Moradabad",
          "Renator Moradabad",
        ]}
        serviceAreas={[
          "Moradabad",
          "Sambhal",
          "Rampur",
          "Amroha",
          "Bijnor",
          "Uttar Pradesh",
        ]}
      />
      <AiFaq />
      <AiDescription />
      <AiSynonymHandler />
      <HeaderV6 />
      <BannerV4 />
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
