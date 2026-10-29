import React from "react";
import { Link } from "react-router-dom";
import Layout, { Arrow } from "../../layout/Layout";
import { SHOW_BLOG } from "../../data/site";
import { POSTS } from "../../data/posts";

const BlogPage = () => (
  <Layout
    noindex={!SHOW_BLOG}
    path="/blog"
    title="Insights on websites, AI automation and growth | Renetter"
    description="Practical notes on websites, AI automation and growth from the Renetter team."
  >
    <section className="rn-page-hero">
      <div className="rn-container">
        <span className="rn-eyebrow">Insights</span>
        <h1 className="rn-h1">Notes on web, AI and <em>growth.</em></h1>
        <p className="rn-lead">Practical reading for founders and marketing teams. No hype, no made-up numbers.</p>
      </div>
    </section>
    <section className="rn-section">
      <div className="rn-container">
        <div className="rn-cards">
          {POSTS.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="rn-card">
              <small>{p.readingTime} min read</small>
              <h2 style={{ fontSize: "1.35rem", lineHeight: 1.25, letterSpacing: "-0.025em", fontWeight: 600 }}>{p.title}</h2>
              <p>{p.excerpt}</p>
              <span className="rn-card__more">Read article <Arrow size={16} /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default BlogPage;
