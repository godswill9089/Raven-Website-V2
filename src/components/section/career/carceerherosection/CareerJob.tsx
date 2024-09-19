import React from "react";
import "../../../../styles/careerpage/Career.css";

interface Job {
  title: string;
  location: string;
  status: string;
  company: string;
}

const CareerJob: React.FC = () => {
  const jobs: Job[] = [
    {
      title: "Product Designer",
      location: "Remote — Anywhere",
      status: "Open",
      company: "Raven",
    },
    {
      title: "DevOps",
      location: "Remote — Anywhere",
      status: "Open",
      company: "Raven",
    },
    {
      title: "Frontend Engineer",
      location: "Remote — Anywhere",
      status: "Open",
      company: "Raven",
    },
  ];

  return (
    <section className="job-listings">
      {jobs.map((job, index) => (
        <div key={index} className={`job-item job-item-${index}`}>
          <p>{job.title}</p>
          <span className="location">{job.location}</span>
          <span className="status">{job.status}</span>
          <span className="company">{job.company}</span>
        </div>
      ))}
    </section>
  );
};

export default CareerJob;
