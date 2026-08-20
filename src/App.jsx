import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import FloatingCta from "./components/FloatingCta.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";
import Specialties from "./pages/Specialties.jsx";
import SpecialtyDetail from "./pages/SpecialtyDetail.jsx";
import Locations from "./pages/Locations.jsx";
import LocationDetail from "./pages/LocationDetail.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPostDetail from "./pages/BlogPostDetail.jsx";
import Contact from "./pages/Contact.jsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageTransition = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <div key={pathname} className="anim-pageFade">
      {children}
    </div>
  );
};

const App = () => (
  <div className="font-sans bg-[var(--offwhite)] antialiased">
    <ScrollToTop />
    <Header />
    <PageTransition>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/specialties" element={<Specialties />} />
        <Route path="/specialties/:slug" element={<SpecialtyDetail />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/locations/:slug" element={<LocationDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPostDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </PageTransition>
    <Footer />
    <FloatingCta />
  </div>
);

export default App;
