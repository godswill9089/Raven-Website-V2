import React from "react";
import "../../../../styles/careerpage/Career.css";

const CareerHero: React.FC = () => {
  return (
    <section className="hero">
      <p className="text-1">CAREERS</p>
      <h1 className="main-career-text">Join the Team at Raven</h1>
      <p className="text-2">
        No egos here. Just a bunch of talented people putting in the work to{" "}
        <br />
        ensure you have the best experience with Raven!
      </p>
      <button className="view-open-roles">View Open Roles</button>
    </section>
  );
};

export default CareerHero;
