import React from "react";
import "../../styles/home/Home.css";
import Navbar from "../../components/navbar/Navbar";
import HeroSection from "../../components/section/Home/herosection/HeroSection";
import LinkAccout from "../../components/section/Home/linkaccount/LinkAccout";
import CardSection from "../../components/section/Home/cardsectinon/CardSection";
import ServicesSection from "../../components/section/Home/servicessection /ServicesSection";
import CustoMercareSection from "../../components/section/Home/customercaresection/CustoMercareSection";
import Business from "../../components/section/Home/business/Business";
import TestimonialSlider from "../../components/section/Home/testimonals/TestimonialsSlider";
import BlogCardList from "../../components/section/Home/blogcard/BlogCardList";
import AppShowcase from "../../components/section/Home/appshowcase/AppShowcase";

const Home = () => {
  return (
    <div className="website-home-page-wrapper">
      <Navbar />
      <HeroSection />
      <LinkAccout />
      <CardSection />
      <ServicesSection />
      <CustoMercareSection />
      <Business />
      <TestimonialSlider />
      <BlogCardList />
      <AppShowcase />
    </div>
  );
};

export default Home;
