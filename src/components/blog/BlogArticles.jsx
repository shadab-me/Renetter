import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import articlesData from "../../jsonData/BlogArticlesData.json";

const BlogArticles = () => {
  const [articles, setArticles] = useState([]);
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [remainingArticles, setRemainingArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Set all articles from the JSON data
    setArticles(articlesData);

    // Set featured article (first article by default)
    setFeaturedArticle(articlesData[0]);

    // Set remaining articles
    setRemainingArticles(articlesData.slice(1));

    // Extract unique categories from articles
    const uniqueCategories = [
      ...new Set(articlesData.map((article) => article.category)),
    ];
    setCategories(uniqueCategories);
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

  // Handle category filter click
  const handleCategoryClick = (category) => {
    setActiveCategory(category);

    if (category === "all") {
      setFeaturedArticle(articlesData[0]);
      setRemainingArticles(articlesData.slice(1));
    } else {
      const filteredArticles = articlesData.filter(
        (article) => article.category === category
      );
      setFeaturedArticle(filteredArticles[0] || null);
      setRemainingArticles(filteredArticles.slice(1) || []);
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);

    if (e.target.value.trim() === "") {
      setFeaturedArticle(articlesData[0]);
      setRemainingArticles(articlesData.slice(1));
      return;
    }

    const filteredArticles = articlesData.filter(
      (article) =>
        article.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(e.target.value.toLowerCase()) ||
        article.content.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setFeaturedArticle(filteredArticles[0] || null);
    setRemainingArticles(filteredArticles.slice(1) || []);
  };

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="blog-articles-area default-padding">
      <div className="container">
        {/* Blog Header */}
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h5 className="sub-title">Our Latest Articles</h5>
              <h2 className="title">Insights & Digital Expertise</h2>
              <p className="mt-4">
                Stay updated with the latest trends, best practices, and
                insights on web development, mobile applications, AI solutions,
                and digital strategy from our experts.
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="row mb-5">
          <div className="col-lg-8">
            <div className="blog-categories">
              <ul className="category-filter d-flex flex-wrap">
                <li
                  className={`${activeCategory === "all" ? "active" : ""}`}
                  onClick={() => handleCategoryClick("all")}
                >
                  <span className="category-icon-wrapper">
                    <img
                      src="/assets/img/blog/category-icon.svg"
                      alt="All"
                      width="24"
                      height="24"
                    />
                  </span>
                  All
                </li>
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className={`${activeCategory === category ? "active" : ""}`}
                    onClick={() => handleCategoryClick(category)}
                  >
                    <span className="category-icon-wrapper">
                      <img
                        src={getCategoryIcon(category)}
                        alt={category}
                        width="24"
                        height="24"
                      />
                    </span>
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-search">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="form-control"
              />
            </div>
          </div>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="row mb-5">
            <div className="col-lg-12">
              <div className="featured-article">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="featured-article-image">
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
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="featured-article-content">
                      <div className="article-meta">
                        <span className="category">
                          <img
                            src={getCategoryIcon(featuredArticle.category)}
                            alt={featuredArticle.category}
                            width="16"
                            height="16"
                            className="me-2"
                          />
                          {featuredArticle.category}
                        </span>
                        <span className="date">
                          <i className="fas fa-calendar-alt me-1"></i>{" "}
                          {formatDate(featuredArticle.publishDate)}
                        </span>
                      </div>
                      <h2 className="article-title">{featuredArticle.title}</h2>
                      <p className="article-excerpt">
                        {featuredArticle.excerpt}
                      </p>
                      <Link
                        to={`/blog/${featuredArticle.slug}`}
                        className="btn btn-theme animation"
                      >
                        Read Article <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Article Grid */}
        <div className="row">
          {remainingArticles.map((article) => (
            <div className="col-lg-4 col-md-6 mb-4" key={article.id}>
              <div className="article-card h-100">
                <div className="article-image">
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
                </div>
                <div className="article-content p-4">
                  <div className="article-meta">
                    <span className="category">
                      <img
                        src={getCategoryIcon(article.category)}
                        alt={article.category}
                        width="16"
                        height="16"
                        className="me-2"
                      />
                      {article.category}
                    </span>
                    <span className="date">
                      <i className="fas fa-calendar-alt me-1"></i>{" "}
                      {formatDate(article.publishDate)}
                    </span>
                  </div>
                  <h3 className="article-title">
                    <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <Link
                    to={`/blog/${article.slug}`}
                    className="btn btn-sm btn-theme"
                  >
                    Read Article <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Articles Found Message */}
        {remainingArticles.length === 0 && !featuredArticle && (
          <div className="row">
            <div className="col-lg-12 text-center py-5">
              <h3>No articles found matching your search criteria.</h3>
              <button
                className="btn btn-theme mt-3"
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("all");
                  setFeaturedArticle(articlesData[0]);
                  setRemainingArticles(articlesData.slice(1));
                }}
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogArticles;
