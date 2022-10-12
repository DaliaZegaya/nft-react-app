import "./Home.css";
import React from "react";
import HeroSection from "../../features/Hero-section/Hero-section";
import LiveAuction from "../../features/Live-auction/Live-auction";
import SellerSection from "../../features/Seller-section/Seller-section";
import TrendingSection from "../../features/Trending-section/Trending-section";
function Home() {
  return (
    <>
    <HeroSection/>
    <LiveAuction/>
    <SellerSection/>
    <TrendingSection/>
    </>
  );
};

export default Home;
