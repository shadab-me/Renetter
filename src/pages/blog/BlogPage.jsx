import React from "react";
import HeaderV6 from "../../components/header/HeaderV6";
import FooterV1 from "../../components/footer/FooterV1";
import BlogArticles from "../../components/blog/BlogArticles";

const BlogPage = () => {
  return (
    <>
      <HeaderV6 />
      <div className="blog-hero-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-hero-content text-center">
                <div className="blog-icon-wrapper mb-4">
                  <img
                    src="/assets/img/blog/blog-icon.svg"
                    alt="Blog"
                    width="120"
                    height="120"
                  />
                </div>
                <h1 className="blog-title">Renetter Blog</h1>
                <p className="blog-subtitle">
                  Insights, trends, and expertise from our digital agency team
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-shape-background">
          <img
            src="/assets/img/blog/blog-shape.svg"
            alt=""
            className="blog-shape"
          />
        </div>
      </div>
      <BlogArticles />
      <FooterV1 />
    </>
  );
};

export default BlogPage;
