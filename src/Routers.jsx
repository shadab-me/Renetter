import React from "react";
import { Route, Routes } from "react-router-dom";
import Home3 from "./pages/homePages/Home3";
import Services from "./pages/servicePages/Services";
import ServiceDetail from "./pages/servicePages/ServiceDetail";
import BlogPage from "./pages/blog/BlogPage";
import ArticleDetailPage from "./pages/blog/ArticleDetailPage";
import ContactUs from "./pages/innerPages/ContactUs";
import Clients from "./pages/innerPages/Clients";
import Error404 from "./pages/innerPages/Error404";

const Routers = () => {
  return (
    <>
      <Routes>
        {/* Home Page - Digital Marketing Agency */}
        <Route path="/" element={<Home3 />}></Route>

        {/* Services Pages */}
        <Route path="/services" element={<Services />}></Route>
        <Route path="/services/:serviceId" element={<ServiceDetail />}></Route>

        {/* Blog Pages */}
        <Route path="/blog" element={<BlogPage />}></Route>
        <Route path="/blog/:slug" element={<ArticleDetailPage />}></Route>

        {/* Clients Page */}
        <Route path="/clients" element={<Clients />}></Route>

        {/* Contact Us Page */}
        <Route path="/contact-us" element={<ContactUs />}></Route>

        {/* 404 Error Page - Keep for error handling */}
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </>
  );
};

export default Routers;
