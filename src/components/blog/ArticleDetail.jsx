import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import articlesData from "../../jsonData/BlogArticlesData.json";

const ArticleDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when component loads
    window.scrollTo(0, 0);

    // Find the article with the matching slug
    const foundArticle = articlesData.find((a) => a.slug === slug);

    if (foundArticle) {
      setArticle(foundArticle);

      // Find related articles with the same category
      const related = articlesData
        .filter(
          (a) =>
            a.category === foundArticle.category && a.id !== foundArticle.id
        )
        .slice(0, 3);
      setRelatedArticles(related);
    } else {
      // Redirect to blog if article not found
      navigate("/blog");
    }

    setLoading(false);
  }, [slug, navigate]);

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

  // Share article on social media
  const shareArticle = (platform) => {
    const url = window.location.href;
    const title = article ? article.title : "Check out this article";

    let shareUrl;

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(title)}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  if (loading) {
    return (
      <div className="loading-container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!article) {
    return null; // Navigate will handle redirection
  }

  return (
    <div className="article-detail-area default-padding">
      <div className="container">
        {/* Article Header */}
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="article-header text-center mb-4">
              <div className="article-meta mb-3">
                <span className="category">
                  <img
                    src={getCategoryIcon(article.category)}
                    alt={article.category}
                    width="24"
                    height="24"
                    className="me-2"
                  />
                  {article.category}
                </span>
                <span className="date">
                  <i className="fas fa-calendar-alt me-1"></i>{" "}
                  {formatDate(article.publishDate)}
                </span>
                <span className="read-time">
                  <i className="fas fa-clock me-1"></i> {article.readingTime}{" "}
                  min read
                </span>
              </div>
              <h1 className="article-title mb-4">{article.title}</h1>
              <div className="article-author d-flex align-items-center justify-content-center">
                <img
                  src={article.authorImage}
                  alt={article.author}
                  className="author-image rounded-circle me-3"
                  width="50"
                  height="50"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/assets/img/team/placeholder.jpg";
                  }}
                />
                <div className="author-info text-start">
                  <h5 className="author-name mb-0">{article.author}</h5>
                  <p className="author-position mb-0">
                    {article.authorPosition}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="row mb-5">
          <div className="col-lg-10 offset-lg-1">
            <div className="article-featured-image">
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
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="article-content">
              {/* Render HTML content safely */}
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>

            {/* Social Share */}
            <div className="social-share mt-5 mb-5">
              <h5>Share this article</h5>
              <div className="share-buttons mt-3">
                <button
                  className="btn btn-twitter me-2"
                  onClick={() => shareArticle("twitter")}
                >
                  <i className="fab fa-twitter"></i> Twitter
                </button>
                <button
                  className="btn btn-facebook me-2"
                  onClick={() => shareArticle("facebook")}
                >
                  <i className="fab fa-facebook-f"></i> Facebook
                </button>
                <button
                  className="btn btn-linkedin"
                  onClick={() => shareArticle("linkedin")}
                >
                  <i className="fab fa-linkedin-in"></i> LinkedIn
                </button>
              </div>
            </div>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="article-tags mb-5">
                <h5>Tags</h5>
                <div className="tags mt-3">
                  {article.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="related-articles mt-5">
            <div className="row">
              <div className="col-lg-12">
                <h3 className="section-title mb-4">Related Articles</h3>
              </div>
            </div>
            <div className="row">
              {relatedArticles.map((relatedArticle) => (
                <div className="col-lg-4 col-md-6 mb-4" key={relatedArticle.id}>
                  <div className="article-card h-100">
                    <div className="article-image">
                      <Link to={`/blog/${relatedArticle.slug}`}>
                        <img
                          src={
                            relatedArticle.featuredImage ||
                            `/assets/img/blog/${relatedArticle.category
                              .toLowerCase()
                              .replace(/\s+/g, "-")}-icon.svg`
                          }
                          alt={relatedArticle.title}
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
                            src={getCategoryIcon(relatedArticle.category)}
                            alt={relatedArticle.category}
                            width="16"
                            height="16"
                            className="me-2"
                          />
                          {relatedArticle.category}
                        </span>
                        <span className="date">
                          <i className="fas fa-calendar-alt me-1"></i>{" "}
                          {formatDate(relatedArticle.publishDate)}
                        </span>
                      </div>
                      <h3 className="article-title">
                        <Link to={`/blog/${relatedArticle.slug}`}>
                          {relatedArticle.title}
                        </Link>
                      </h3>
                      <p className="article-excerpt">
                        {relatedArticle.excerpt}
                      </p>
                      <Link
                        to={`/blog/${relatedArticle.slug}`}
                        className="btn btn-sm btn-theme"
                      >
                        Read Article <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back to Blog */}
        <div className="row mt-5">
          <div className="col-lg-12 text-center">
            <Link to="/blog" className="btn btn-theme">
              <i className="fas fa-arrow-left me-2"></i> Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
