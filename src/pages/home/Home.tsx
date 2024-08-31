import React from "react";
import "../../styles/home/Home.css";
import Navbar from "../../components/navbar/Navbar";
import HeroSection from "../../components/section/herosection/HeroSection";
import LinkAccout from "../../components/section/linkaccount/LinkAccout";
import CardSection from "../../components/section/cardsectinon/CardSection";
import ServicesSection from "../../components/section/servicessection /ServicesSection";
import CustoMercareSection from "../../components/section/customercaresection/CustoMercareSection";
import Business from "../../components/section/business/Business";
import TestimonialSlider from "../../components/section/testimonals/TestimonialsSlider";
import BlogCardList from "../../components/section/blogcard/BlogCardList";
import AppShowcase from "../../components/section/appshowcase/AppShowcase";

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
