import "react-toastify/dist/ReactToastify.css";
import "react-modal-video/css/modal-video.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-free/css/all.css";
import "swiper/css/bundle";
import "wowjs/css/libs/animate.css";
import "../src/assets/css/elegant-icons.css";
import "../src/assets/css/flaticon-set.css";
import "react-circular-progressbar/dist/styles.css";

// Import our custom theme variables
import "../src/assets/css/theme-variables.css";

import "../src/assets/css/validnavs.css";
import "../src/assets/css/unit-test.css";
import "../src/assets/css/spacing.css";
import "../src/assets/css/style.css";
import "../src/assets/css/custom.css";
import "../src/assets/css/main.css"; // Import main CSS file

import Routers from "./Routers";
import ScrollUpBtn from "./components/others/ScrollUpBtn";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  //  Preloader

  useEffect(() => {
    // Change favicon programmatically to ensure it overrides cache
    const changeFavicon = () => {
      const link = document.querySelector("link[rel~='icon']");
      if (link) {
        link.remove();
      }
      const newLink = document.createElement("link");
      newLink.rel = "icon";
      newLink.href =
        "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Crect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%233498DB%22/%3E%3Ctext x=%2250%22 y=%2270%22 font-size=%2270%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-weight=%22bold%22 fill=%22white%22%3ER%3C/text%3E%3C/svg%3E";
      document.head.appendChild(newLink);
    };

    changeFavicon();
  }, []);

  return (
    <>
      <div>
        <Helmet>
          <title>
            RENETTER AGENCY Digital Solutions, Engineered for Growth
          </title>
          <meta
            name="description"
            content="Renetter – Digital Solutions, Engineered for Growth. We transform businesses with innovative digital solutions powered by cutting-edge technology."
          />
          <meta
            name="keywords"
            content="AI, artificial intelligence, web development, mobile apps, digital agency, machine learning, digital transformation"
          />
          <meta
            property="og:title"
            content="RENETTER AGENCY - Digital Solutions, Engineered for Growth"
          />
          <meta
            property="og:description"
            content="Digital Solutions, Engineered for Growth. Transforming businesses with innovative digital solutions powered by cutting-edge technology."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://renetter.com" />
          <meta property="og:image" content="/img/logo/logo.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="RENETTER AGENCY - Digital Solutions, Engineered for Growth"
          />
          <meta
            name="twitter:description"
            content="Digital Solutions, Engineered for Growth. Transforming businesses with innovative digital solutions powered by cutting-edge technology."
          />
          <meta name="twitter:image" content="/img/logo/logo.png" />
          <link rel="canonical" href="https://renetter.com" />
        </Helmet>
        <Routers />
        <ScrollUpBtn />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
