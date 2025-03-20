import React from "react";
import BlogForm from "./BlogForm";
import BlogComment from "./BlogComment";
import BlogPostPagination from "./BlogPostPagination";
import BlogTagsShare from "./BlogTagsShare";
import BlogPostAuthor from "./BlogPostAuthor";
import BlogPostContent from "./BlogPostContent";
import { motion } from "framer-motion";

const BlogSingleContent = ({ blogInfo }) => {
  return (
    <>
      <div className="blog-area single full-blog full-blog default-padding">
        <div className="container">
          <div className="blog-items">
            <div className="row">
              <motion.div
                className="blog-content col-lg-10 offset-lg-1 col-md-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <BlogPostContent blogInfo={blogInfo} />
                <BlogPostAuthor />
                <BlogTagsShare />
                <BlogPostPagination />
                <div className="blog-comments">
                  <div className="comments-area">
                    <BlogComment blogInfo={blogInfo} />
                    <BlogForm />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSingleContent;
