import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import articlesData from "../../jsonData/BlogArticlesData.json";

const HomeBlogPreview = () => {
  const [latestArticles, setLatestArticles] = useState([]);
  const [featuredArticle, setFeaturedArticle] = useState(null);

  useEffect(() => {
    // Sort articles by date (newest first)
    const sortedArticles = [...articlesData].sort(
      (a, b) => new Date(b.publishDate) - new Date(a.publishDate)
    );

    // Set the first article as featured
    setFeaturedArticle(sortedArticles[0]);

    // Set the next 3 articles as latest
    setLatestArticles(sortedArticles.slice(1, 4));
  }, []);

  // Get category icon based on category name
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Web Development":
        return "/assets/img/blog/web-dev-icon.svg";
      case "Digital Strategy":
        return "/assets/img/blog/digital-strategy-icon.svg";
      case "Mobile Development":
        return "/assets/img/blog/mobile-dev-icon.svg";
      case "UI/UX Design":
        return "/assets/img/blog/uiux-design-icon.svg";
      case "Brand Identity":
        return "/assets/img/blog/brand-identity-icon.svg";
      case "Content Marketing":
        return "/assets/img/blog/content-marketing-icon.svg";
      case "Social Media":
        return "/assets/img/blog/social-media-icon.svg";
      default:
        return "/assets/img/blog/category-icon.svg";
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="blog-preview-area default-padding bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h4 className="sub-title">Latest Insights</h4>
              <h2 className="title">Our Latest Articles</h2>
              <p>
                Stay informed with our latest thoughts on industry trends,
                technical insights, and strategic approaches to digital
                transformation.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="row mb-5">
            <div className="col-lg-12">
              <div className="featured-blog-item">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="featured-thumb">
                      <Link to={`/blog/${featuredArticle.slug}`}>
                        <img
                          src={
                            featuredArticle.featuredImage ||
                            `/assets/img/blog/${featuredArticle.category
                              .toLowerCase()
                              .replace(/\s+/g, "-")}-icon.svg`
                          }
                          alt={featuredArticle.title}
                          className="img-fluid rounded"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/assets/img/blog/blog-icon.svg";
                          }}
                        />
                      </Link>
                      <div className="category">
                        <Link to={`/blog?category=${featuredArticle.category}`}>
                          <img
                            src={getCategoryIcon(featuredArticle.category)}
                            alt={featuredArticle.category}
                            width="16"
                            height="16"
                            className="me-2"
                          />
                          {featuredArticle.category}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="featured-info">
                      <div className="meta">
                        <ul>
                          <li>
                            <i className="fas fa-calendar-alt"></i>{" "}
                            {formatDate(featuredArticle.publishDate)}
                          </li>
                          <li>
                            <i className="fas fa-clock"></i>{" "}
                            {featuredArticle.readingTime} min read
                          </li>
                          <li>
                            <i className="fas fa-user"></i>{" "}
                            {featuredArticle.author}
                          </li>
                        </ul>
                      </div>
                      <h3>
                        <Link to={`/blog/${featuredArticle.slug}`}>
                          {featuredArticle.title}
                        </Link>
                      </h3>
                      <p>{featuredArticle.excerpt}</p>
                      <div className="read-more-btn">
                        <Link
                          className="btn btn-md btn-theme"
                          to={`/blog/${featuredArticle.slug}`}
                        >
                          Read Featured Article{" "}
                          <i className="fas fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Latest Articles */}
        <div className="row">
          {latestArticles.map((article) => (
            <div className="col-lg-4 col-md-6" key={article.id}>
              <div className="blog-item">
                <div className="thumb">
                  <Link to={`/blog/${article.slug}`}>
                    <img
                      src={
                        article.featuredImage ||
                        `/assets/img/blog/${article.category
                          .toLowerCase()
                          .replace(/\s+/g, "-")}-icon.svg`
                      }
                      alt={article.title}
                      className="img-fluid rounded"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/assets/img/blog/blog-icon.svg";
                      }}
                    />
                  </Link>
                  <div className="category">
                    <Link to={`/blog?category=${article.category}`}>
                      <img
                        src={getCategoryIcon(article.category)}
                        alt={article.category}
                        width="16"
                        height="16"
                        className="me-2"
                      />
                      {article.category}
                    </Link>
                  </div>
                </div>
                <div className="info">
                  <div className="meta">
                    <ul>
                      <li>
                        <i className="fas fa-calendar-alt"></i>{" "}
                        {formatDate(article.publishDate)}
                      </li>
                      <li>
                        <i className="fas fa-clock"></i> {article.readingTime}{" "}
                        min read
                      </li>
                    </ul>
                  </div>
                  <h4>
                    <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                  </h4>
                  <p>
                    {article.excerpt.length > 120
                      ? `${article.excerpt.substring(0, 120)}...`
                      : article.excerpt}
                  </p>
                  <div className="read-more-btn">
                    <Link
                      className="btn btn-md btn-theme"
                      to={`/blog/${article.slug}`}
                    >
                      Read Article <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-md-12 text-center mt-5">
            <Link to="/blog" className="btn btn-md btn-gradient animation">
              View All Articles <i className="fas fa-long-arrow-alt-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlogPreview;
