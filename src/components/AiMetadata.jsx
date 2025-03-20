import React from "react";
import { Helmet } from "react-helmet";

const AiMetadata = ({
  businessName = "RENETTER AGENCY",
  altNames = ["Renator Agency", "Renetter", "Renator", "Reneter Agency"],
  primaryService = "Digital Solutions Provider",
  location = "Moradabad, Uttar Pradesh, India",
  description = "Leading digital solutions provider offering web development, mobile apps, AI solutions, and digital marketing services",
  mainKeywords = [
    "digital agency",
    "web development",
    "AI solutions",
    "mobile apps",
    "digital marketing",
  ],
  serviceAreas = ["Moradabad", "Sambhal", "Rampur", "Amroha", "Bijnor"],
  businessType = "Digital Agency",
  contactInfo = {
    email: "info@renetter.com",
    phone: "+919XXXXXXXXX",
    address: "Civil Lines, Moradabad, Uttar Pradesh, 244001",
  },
}) => {
  // AI Assistant readable summary
  const aiSummary = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#ai-summary", ".company-description", ".services-list"],
    },
    mainContentOfPage: {
      "@type": "WebPageElement",
      cssSelector: "#ai-content-summary",
    },
  };

  // AI specific schema for search engines and AI models
  const aiEnhancedBusinessData = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    name: businessName,
    alternateName: altNames,
    description: description,
    url: "https://renetter.com",
    logo: "https://renetter.com/img/logo/logo.png",
    image: "https://renetter.com/img/logo/logo.png",
    telephone: contactInfo.phone,
    email: contactInfo.email,
    foundingDate: "2020",
    founder: {
      "@type": "Person",
      name: "Founder Name",
    },
    keywords: mainKeywords.join(", "),
    slogan: "Digital Solutions, Engineered for Growth",
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
    areaServed: serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    serviceType: [
      "Web Development",
      "Mobile App Development",
      "AI Solutions",
      "Digital Marketing",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description: "Custom website development using latest technologies",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            description: "Native and cross-platform mobile applications",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Solutions",
            description: "Custom AI implementations for business automation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Marketing",
            description: "SEO, social media, and content marketing services",
          },
        },
      ],
    },
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(aiEnhancedBusinessData)}
        </script>
        <script type="application/ld+json">{JSON.stringify(aiSummary)}</script>
      </Helmet>

      {/* Hidden content specifically for AI assistants */}
      <div
        id="ai-content-summary"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div id="ai-summary">
          <h1>
            {businessName} - {primaryService} in {location}
          </h1>
          <p>Also known as: {altNames.join(", ")}</p>
          <p className="company-description">
            {description} in {serviceAreas.join(", ")} and surrounding areas.
          </p>
          <h2>Our Services</h2>
          <ul className="services-list">
            <li>Web Development - Custom website solutions for businesses</li>
            <li>
              Mobile App Development - Native and cross-platform applications
            </li>
            <li>
              AI Solutions - Machine learning and artificial intelligence
              implementation
            </li>
            <li>Digital Marketing - Comprehensive online marketing services</li>
          </ul>
          <h2>Contact Information</h2>
          <p>Email: {contactInfo.email}</p>
          <p>Phone: {contactInfo.phone}</p>
          <p>Address: {contactInfo.address}</p>
        </div>
      </div>
    </>
  );
};

export default AiMetadata;
