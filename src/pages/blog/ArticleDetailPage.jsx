import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Layout, { Arrow } from "../../layout/Layout";
import { SITE, SHOW_BLOG } from "../../data/site";
import { POSTS } from "../../data/posts";

const Block = ({ b }) => {
  if (b.h) return <h2>{b.h}</h2>;
  if (b.ul) return <ul>{b.ul.map((i) => <li key={i}>{i}</li>)}</ul>;
  return <p>{b.p}</p>;
};

const ArticleDetailPage = () => {
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  };

  return (
    <Layout noindex={!SHOW_BLOG} path={`/blog/${post.slug}`} title={`${post.title} | Renetter`} description={post.excerpt}>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <section className="rn-page-hero">
        <div className="rn-container">
          <Link to="/blog" className="rn-eyebrow">&larr; All insights</Link>
          <h1 className="rn-h1">{post.title}</h1>
          <p className="rn-meta">
            <span>By the Renetter team</span>
            <span>{post.readingTime} min read</span>
          </p>
        </div>
      </section>
      <section className="rn-section" style={{ paddingTop: 24 }}>
        <div className="rn-container">
          <article className="rn-prose">
            {post.body.map((b, i) => <Block key={i} b={b} />)}
          </article>
        </div>
      </section>
      <section className="rn-section rn-section--dark rn-cta">
        <div className="rn-container">
          <div className="rn-cta__box">
            <h2 className="rn-h2">Want this applied to <em>your</em> business?</h2>
            <p>Tell us what you are working on. Our founder replies personally.</p>
            <Link to="/contact-us" className="rn-btn rn-btn--light">Contact us <Arrow /></Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ArticleDetailPage;
