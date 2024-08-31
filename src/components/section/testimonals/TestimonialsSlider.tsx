import React, { useState } from "react";
import Testimonial from "../testimonals/Testimonials";
import "../../../styles/testimonials/Testimonials.css";
import { useIcon } from "../../hooks/useIcon";

const testimonials = [
  {
    name: "Ajogi Dickson",
    message:
      "The service of the app is very fast and effective. Delivery of money when sending to others.",
    paragraph:
      "The service of the app is very fast and effective. Delivery of money when sending to others.",
  },
  {
    name: "Ajogi Dickson",
    message:
      "The service of the app is very fast and effective. Delivery of money when sending to others.",
    paragraph:
      "The service of the app is very fast and effective. Delivery of money when sending to others.",
  },
  {
    name: "Ajogi Dickson",
    message:
      "The service of the app is very fast and effective. Delivery of money when sending to others.",
    paragraph:
      "The service of the app is very fast and effective. Delivery of money when sending to others.",
  },
  {
    name: "Ajogi Dickson",
    message:
      "The service of the app is very fast and effective. Delivery of money when sending to others.",
    paragraph:
      "The service of the app is very fast and effective. Delivery of money when sending to others.",
  },
];
const TestimonialSlider: React.FC = () => {
  const { vector1, vector2 } = useIcon();

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsToShow = 3;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? testimonials.length - testimonialsToShow
        : prevIndex - testimonialsToShow
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + testimonialsToShow >= testimonials.length
        ? 0
        : prevIndex + testimonialsToShow
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + testimonialsToShow
  );

  return (
    <div className="testimonial-slider">
      <div className="test-top">
        <div>
          <h2 className="test-header">
            Over 500K people use Raven <br /> for their daily Transactions
          </h2>
          <p className="test-p">Here's what a few of them have to say...</p>
        </div>
        <div className="navigation">
          <button className="prev" onClick={handlePrevClick}>
            <img src={vector2} alt="" className="next-btn" />
          </button>
          <button className="next" onClick={handleNextClick}>
            <img src={vector1} alt="" className="next-btn" />
          </button>
        </div>
      </div>

      <div className="testimonials-container">
        {visibleTestimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            message={testimonial.message}
            paragraph={testimonial.paragraph}
          />
        ))}
      </div>
    </div>
  );
};
export default TestimonialSlider;
