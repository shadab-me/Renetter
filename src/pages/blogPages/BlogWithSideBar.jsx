import React from "react";
import BlogWithSideBarContent from "../../components/blog/BlogWithSideBarContent";
import FooterV1 from "../../components/footer/FooterV1";
import { Helmet } from "react-helmet";
import HeaderV6 from "../../components/header/HeaderV6";

const BlogWithSideBar = () => {
  return (
    <>
      <Helmet>
        <title>Renetter - Blog & Insights</title>
        <meta
          name="description"
          content="Latest insights and articles about AI, web development, mobile apps, and digital strategy from Renetter Agency."
        />
      </Helmet>
      <HeaderV6 />

      {/* Dark Hero Banner */}
      <div className="service-hero-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="service-hero-content">
                <h1 className="service-title">Blog & Insights</h1>
                <p>
                  Stay updated with the latest trends, technologies, and
                  strategies in the digital world. Our experts share valuable
                  insights and case studies to help your business thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BlogWithSideBarContent />
      <FooterV1 />
    </>
  );
};

export default BlogWithSideBar;
