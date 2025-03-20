import React from "react";
import { Helmet } from "react-helmet";

const SeoHelmet = ({
  title = "RENETTER AGENCY - Digital Solutions in Moradabad",
  description = "Renetter Agency offers innovative digital solutions powered by cutting-edge technology in Moradabad and nearby areas. Transform your business with our expert services.",
  keywords = "AI, artificial intelligence, web development, mobile apps, digital agency, Moradabad, UP, Uttar Pradesh, digital marketing, website development",
  ogType = "website",
  ogUrl = "https://renetter.com",
  ogImage = "/img/logo/logo.png",
  twitterCard = "summary_large_image",
  canonicalUrl = "https://renetter.com",
  schema = null,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Moradabad" />
      <meta name="geo.position" content="28.8386;78.7733" />
      <meta name="ICBM" content="28.8386, 78.7733" />

      {/* Structured Data / Schema.org */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
};

export default SeoHelmet;
