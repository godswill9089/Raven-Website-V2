import React from "react";
import "../../../../styles/programsEvents/ProgramsEvents.css";

// Define a type for the program data
interface Program {
  image: string;
  title: string;
  description: string;
}

const programs: Program[] = [
  {
    image: "/path-to-image1.jpg",
    title: "Reducing Poverty in Nigeria",
    description:
      "Reducing Poverty in Nigeria through inculcating skills necessary for individual growth",
  },
  {
    image: "/path-to-image2.jpg",
    title: "Reducing Poverty in Nigeria",
    description:
      "Reducing Poverty in Nigeria through inculcating skills necessary for individual growth",
  },
  {
    image: "/path-to-image3.jpg",
    title: "Reducing Poverty in Nigeria",
    description:
      "Reducing Poverty in Nigeria through inculcating skills necessary for individual growth",
  },
];

const ProgramsEvents: React.FC = () => {
  return (
    <section className="programs-events">
      {/* Heading Section */}
      <div className="heading">
        <h4 className="sub-title">Programs & Events</h4>
        <h2 className="main-title">
          Exciting events & programmes we have held so far..
        </h2>
      </div>

      {/* Programs Grid Section */}
      <div className="programs-grid">
        {programs.map((program, index) => (
          <div className="program-card" key={index}>
            <div className="image-wrapper">
              <img
                src={program.image}
                alt={program.title}
                className="program-image"
              />
              <div className="play-icon">
                <img src="/path-to-play-icon.png" alt="Play" />
              </div>
            </div>
            <div className="program-description">
              <p>{program.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramsEvents;
