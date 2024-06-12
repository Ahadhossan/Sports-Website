"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import TreandingNews from "./TreandingNews/TreandingNews";
import LatestNews from "./LatestNews/LatestNews";
import MatchHighlights from "./MatchHighlights/MatchHighlights";
import LatestPost from "./LatestPost/LatestPost";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAos = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAos();
  }, []);

  return (
    <div>
      <Hero />
      <TreandingNews />
      <LatestNews />
      <MatchHighlights />
      <LatestPost />
    </div>
  );
};

export default Home;
