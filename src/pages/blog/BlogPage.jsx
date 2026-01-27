import React from "react";
import HeaderV6 from "../../components/header/HeaderV6";
import FooterRedesign from "../../components/footer/FooterRedesign";
import BlogArticles from "../../components/blog/BlogArticles";

const BlogPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="renetter-redesign">
      <HeaderV6 />
      
      {/* Hero Section - Minimalist Dark */}
      <section className="hero-section" style={{ 
        background: '#0a0a0a',
        paddingTop: '120px',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <div className="renetter-container">
          <div className="hero-content" style={{ margin: '0 auto' }}>
            <h1 className="hero-title" style={{ fontSize: '3.5rem', letterSpacing: '-0.02em', marginBottom: '20px' }}>
              Our Insights
            </h1>
            <p className="hero-subtitle" style={{ fontSize: '1.25rem', color: '#a1a1aa', maxWidth: '700px', margin: '0 auto' }}>
              Expert perspectives on AI, web development, and digital strategy.
            </p>
          </div>
        </div>
      </section>

      <BlogArticles />
      
      <FooterRedesign />
    </div>
  );
};

export default BlogPage;
