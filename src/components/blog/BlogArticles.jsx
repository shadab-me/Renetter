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
    <div className="blog-articles-area" style={{ padding: '80px 0', background: '#fff' }}>
      <div className="renetter-container">
        
        {/* Search and Category Filter */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
            
            {/* Search */}
             <div style={{ width: '100%', maxWidth: '600px', position: 'relative' }}>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={handleSearchChange}
                style={{
                  width: '100%',
                  padding: '16px 24px',
                  borderRadius: '50px',
                  border: '1px solid #e5e7eb',
                  fontSize: '1rem',
                  outline: 'none',
                  background: '#f9fafb',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
              <i className="fas fa-search" style={{ position: 'absolute', right: '24px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }}></i>
            </div>

            {/* Filters */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
              <button
                className={`btn-premium ${activeCategory === "all" ? "btn-primary" : "btn-outline"}`}
                onClick={() => handleCategoryClick("all")}
                style={{ padding: '10px 24px', fontSize: '0.9rem', borderWidth: '1px' }}
              >
                All
              </button>
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`btn-premium ${activeCategory === category ? "btn-primary" : "btn-outline"}`}
                  onClick={() => handleCategoryClick(category)}
                  style={{ 
                    padding: '10px 24px', 
                    fontSize: '0.9rem', 
                    borderWidth: '1px',
                    color: activeCategory === category ? '#fff' : '#111827',
                    borderColor: activeCategory === category ? 'transparent' : '#e5e7eb'
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-5">
            <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', color: '#111827', borderLeft: '4px solid #3b82f6', paddingLeft: '16px' }}>Featured</h2>
            <Link to={`/blog/${featuredArticle.slug}`} style={{ textDecoration: 'none' }}>
              <div className="premium-card" style={{ 
                background: '#f9fafb', 
                padding: '0', 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '0', 
                overflow: 'hidden',
                borderColor: '#e5e7eb',
                boxShadow: 'none',
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = '#3b82f6';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}
              >
                <div style={{ height: '400px', overflow: 'hidden' }}>
                   <img
                    src={featuredArticle.featuredImage || `/assets/img/blog/${(featuredArticle.category || 'default').toLowerCase().replace(/\s+/g, "-")}-icon.svg`}
                    alt={featuredArticle.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/800x600?text=Renetter+Blog"; }}
                  />
                </div>
                <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', gap: '15px', fontSize: '0.9rem', color: '#6b7280', marginBottom: '16px' }}>
                    <span style={{ color: '#3b82f6', fontWeight: '600' }}>{featuredArticle.category}</span>
                    <span>•</span>
                    <span>{formatDate(featuredArticle.publishDate)}</span>
                  </div>
                  <h2 style={{ fontSize: '2.5rem', fontFamily: 'Inter, sans-serif', fontWeight: '700', marginBottom: '16px', color: '#111827', lineHeight: '1.2' }}>
                    {featuredArticle.title}
                  </h2>
                  <p style={{ color: '#4b5563', lineHeight: '1.6', fontSize: '1.1rem', marginBottom: '24px' }}>
                    {featuredArticle.excerpt}
                  </p>
                  <div style={{ color: '#3b82f6', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    Read Article <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Article Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          {remainingArticles.map((article) => (
            <Link to={`/blog/${article.slug}`} key={article.id} style={{ textDecoration: 'none' }}>
              <div className="premium-card" style={{ 
                background: '#fff', 
                padding: '0', 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                overflow: 'hidden',
                borderColor: '#e5e7eb',
                boxShadow: 'none',
                transition: 'all 0.3s ease'
              }}
               onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = '#3b82f6';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{ height: '240px', overflow: 'hidden' }}>
                  <img
                    src={article.featuredImage || `/assets/img/blog/${(article.category || 'default').toLowerCase().replace(/\s+/g, "-")}-icon.svg`}
                    alt={article.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/600x400?text=Renetter+Blog"; }}
                  />
                </div>
                <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: '10px', fontSize: '0.85rem', color: '#6b7280', marginBottom: '12px' }}>
                    <span style={{ color: '#3b82f6', fontWeight: '600' }}>{article.category}</span>
                    <span>•</span>
                    <span>{formatDate(article.publishDate)}</span>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontFamily: 'Inter, sans-serif', fontWeight: '700', marginBottom: '12px', color: '#111827', lineHeight: '1.4' }}>
                    {article.title}
                  </h3>
                  <p style={{ color: '#4b5563', lineHeight: '1.6', fontSize: '1rem', marginBottom: '20px', flex: 1 }}>
                    {article.excerpt}
                  </p>
                  <div style={{ color: '#3b82f6', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', marginTop: 'auto' }}>
                    Read More <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Articles Found Message */}
        {remainingArticles.length === 0 && !featuredArticle && (
          <div className="row">
            <div className="col-lg-12 text-center py-5">
              <h3 style={{ fontFamily: 'Inter, sans-serif' }}>No articles found matching your search criteria.</h3>
              <button
                className="btn-premium btn-primary mt-3"
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
