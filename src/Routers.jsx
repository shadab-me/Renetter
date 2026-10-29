import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomeRedesign from "./pages/homePages/HomeRedesign";
import Services from "./pages/servicePages/Services";
import ServiceDetail from "./pages/servicePages/ServiceDetail";
import CaseStudies from "./pages/innerPages/CaseStudies";
import Clients from "./pages/innerPages/Clients";
import About from "./pages/innerPages/AboutUs";
import BlogPage from "./pages/blog/BlogPage";
import ArticleDetailPage from "./pages/blog/ArticleDetailPage";
import ContactUs from "./pages/innerPages/ContactUs";
import FreeAudit from "./pages/innerPages/FreeAudit";
import ThankYou from "./pages/innerPages/ThankYou";
import Error404 from "./pages/innerPages/Error404";

const Routers = () => (
  <Routes>
    <Route path="/" element={<HomeRedesign />} />
    <Route path="/services" element={<Services />} />
    <Route path="/services/:serviceId" element={<ServiceDetail />} />
    <Route path="/case-studies" element={<CaseStudies />} />
    <Route path="/work" element={<Navigate to="/case-studies" replace />} />
    <Route path="/clients" element={<Clients />} />
    <Route path="/about" element={<About />} />
    <Route path="/blog" element={<BlogPage />} />
    <Route path="/blog/:slug" element={<ArticleDetailPage />} />
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="/free-audit" element={<FreeAudit />} />
    <Route path="/thank-you" element={<ThankYou />} />
    <Route path="*" element={<Error404 />} />
  </Routes>
);

export default Routers;
