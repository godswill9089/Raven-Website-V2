import React from "react";
import { useIcon } from "../../hooks/useIcon";

interface TestimonialProps {
  name: string;
  message: string;
  paragraph: string;
}
const Testimonial: React.FC<TestimonialProps> = ({
  name,
  message,
  paragraph,
}) => {
  const { playicon } = useIcon();
  return (
    <div className="testimonial">
      <div className="icon">
        <img src={playicon} alt=""></img>
      </div>
      <h4>{name}</h4>
      <p>{message}</p>
      <p className="p2">{paragraph}</p>
    </div>
  );
};
export default Testimonial;
