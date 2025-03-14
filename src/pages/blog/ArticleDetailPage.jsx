import React from "react";
import HeaderV6 from "../../components/header/HeaderV6";
import FooterV1 from "../../components/footer/FooterV1";
import ArticleDetail from "../../components/blog/ArticleDetail";

const ArticleDetailPage = () => {
  return (
    <>
      <HeaderV6 />
      <div className="article-page-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="back-to-blog mb-4">
                <a href="/blog" className="btn btn-sm btn-outline-light">
                  <i className="fas fa-arrow-left me-2"></i> Back to Articles
                </a>
              </div>
              <div className="category-icon-wrapper mb-3">
                <img
                  src="/assets/img/blog/category-icon.svg"
                  alt="Category"
                  width="80"
                  height="80"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="article-shape-background">
          <img
            src="/assets/img/blog/blog-shape.svg"
            alt=""
            className="article-shape"
          />
        </div>
      </div>
      <ArticleDetail />
      <FooterV1 />
    </>
  );
};

export default ArticleDetailPage;
