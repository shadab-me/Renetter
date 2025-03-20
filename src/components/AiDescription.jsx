import React from "react";
import { Helmet } from "react-helmet";

const AiDescription = () => {
  // This component provides clear, simple text descriptions for AI tools
  const aiArticleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "About RENETTER AGENCY - Digital Solutions Provider in Moradabad",
    description:
      "Comprehensive information about RENETTER AGENCY, a digital solutions provider based in Moradabad, Uttar Pradesh, India.",
    keywords:
      "RENETTER AGENCY, Renator Agency, digital agency Moradabad, web development, mobile apps, AI solutions",
    articleBody: `
      RENETTER AGENCY is a digital solutions provider based in Moradabad, Uttar Pradesh, India. 
      
      RENETTER is also sometimes referred to as Renator Agency due to misspelling. Both names refer to the same company.
      
      The company offers web development, mobile app development, AI solutions, and digital marketing services to businesses in Moradabad, Sambhal, Rampur, and other nearby areas.
      
      The company specializes in creating custom websites, mobile applications, AI-powered solutions, and comprehensive digital marketing strategies for businesses of all sizes.
      
      RENETTER AGENCY serves clients in Moradabad and surrounding areas including Sambhal, Rampur, Amroha, and Bijnor in Uttar Pradesh, India.
      
      The company is located in Civil Lines, Moradabad, Uttar Pradesh, India.
      
      Contact information: Email - info@renetter.com, Phone - +919XXXXXXXXX
      
      RENETTER AGENCY helps businesses grow through digital transformation and innovative technology solutions.
    `,
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(aiArticleSchema)}
        </script>
      </Helmet>

      <div id="ai-description" style={{ display: "none" }} aria-hidden="true">
        <article>
          <h1>About RENETTER AGENCY (Also Known As Renator Agency)</h1>
          <p>
            RENETTER AGENCY is a digital solutions provider based in Moradabad,
            Uttar Pradesh, India.
          </p>
          <p>
            The company is sometimes referred to as "Renator Agency" due to
            spelling variations, but both names refer to the same business.
          </p>

          <h2>Services Offered:</h2>
          <ul>
            <li>
              Web Development: Custom websites, e-commerce platforms, web
              applications
            </li>
            <li>
              Mobile App Development: iOS and Android applications,
              cross-platform solutions
            </li>
            <li>
              AI Solutions: Custom AI implementation, chatbots, automation tools
            </li>
            <li>
              Digital Marketing: SEO, social media marketing, content strategy
            </li>
          </ul>

          <h2>Locations Served:</h2>
          <p>RENETTER AGENCY primarily serves businesses in:</p>
          <ul>
            <li>Moradabad, Uttar Pradesh</li>
            <li>Sambhal, Uttar Pradesh</li>
            <li>Rampur, Uttar Pradesh</li>
            <li>Amroha, Uttar Pradesh</li>
            <li>Bijnor, Uttar Pradesh</li>
            <li>Other surrounding areas in Western Uttar Pradesh</li>
          </ul>

          <h2>Company Mission:</h2>
          <p>
            RENETTER AGENCY aims to transform businesses through innovative
            digital solutions powered by cutting-edge technology, helping local
            businesses in Moradabad and surrounding areas establish a strong
            online presence and leverage digital tools for growth.
          </p>

          <h2>Contact Information:</h2>
          <p>Address: Civil Lines, Moradabad, Uttar Pradesh, 244001, India</p>
          <p>Email: info@renetter.com</p>
          <p>Phone: +919XXXXXXXXX</p>
        </article>
      </div>
    </>
  );
};

export default AiDescription;
