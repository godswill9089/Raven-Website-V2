import React, { useState } from "react";
import "../../../../styles/jobList/JobList.css";
import { useIcon } from "../../../hooks/useIcon";

const jobs = {
  Creative: [
    {
      title: "Jnr. Product Designer",
      location: "Remote / Anywhere",
      link: "#",
    },
    { title: "Video Director", location: "Onsite / Lekki", link: "#" },
    { title: "Design Manager", location: "Onsite / Lekki", link: "#" },
    { title: "Snr. Product Designer", location: "Onsite / Lekki", link: "#" },
    { title: "3D Artist", location: "Remote / Anywhere", link: "#" },
  ],
  Development: [],
  Marketing: [],
  Communications: [],
  Finance: [],
  CustomerService: [],
  FraudSecurity: [],
};

type JobCategory = keyof typeof jobs;

const JobList: React.FC = () => {
  const { linkjobs } = useIcon();
  const [activeTab, setActiveTab] = useState<JobCategory>("Creative");

  const tabs = Object.keys(jobs) as JobCategory[];

  return (
    <div className="job-list-container">
      <p className="job-list-top">OPEN ROLES</p>
      <h2 className="section-title">
        Roles to be filled in <span>Raven!</span>
      </h2>

      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? "active-tab" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="job-list">
        {jobs[activeTab].length > 0 ? (
          <>
            <h3 className="job-category">{activeTab}</h3>
            {jobs[activeTab].map((job, index) => (
              <div key={index} className="job">
                <span className="job-title">{job.title}</span>
                <span className="job-location">{job.location}</span>
                <a href={job.link} className="apply-link">
                  Apply for this{" "}
                  <span className="apply-arrow">
                    <img src={linkjobs} alt="" />
                  </span>
                </a>
              </div>
            ))}
          </>
        ) : (
          <p>No job listings available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default JobList;
