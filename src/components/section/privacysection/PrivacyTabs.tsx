import React, { useState, useRef, useEffect } from "react";
import "../../../styles/privacypage/PrivacyPage.css";

// Define the types for the tabs
type Tab =
  | "Introduction"
  | "Information Collected"
  | "Compliance"
  | "Age Restriction"
  | "Feedback & Complaint";

const PrivacyTabs: React.FC = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState<Tab>("Introduction");

  // Create refs for each section
  const sectionsRef = useRef<Record<Tab, HTMLElement | null>>({
    Introduction: null,
    "Information Collected": null,
    Compliance: null,
    "Age Restriction": null,
    "Feedback & Complaint": null,
  });

  // Set up IntersectionObserver to change active tab on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tab = entry.target.id as Tab;
            setActiveTab(tab); // Update the active tab when the section is in view
          }
        });
      },
      { threshold: 0.5 } // 50% of the section must be visible
    );

    // Observe each section
    Object.values(sectionsRef.current).forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    // Clean up observer on component unmount
    return () => {
      Object.values(sectionsRef.current).forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  // Content for each tab
  const tabContent: Record<Tab, JSX.Element> = {
    Introduction: (
      <section
        id="Introduction"
        ref={(el) => (sectionsRef.current.Introduction = el)}
      >
        <h3>Introduction</h3>
        <div className="pri-dec">
          <p>
            We are always open to listen to your feedback anytime anyday have
            something, you want to let us know drop a message below. but first
            check some questions already answered!. We are always open to listen
            to your feedback anytime anyday have something, you want to let us
            know drop a message below. but first check some questions already
            answered!.
          </p>
        </div>
      </section>
    ),
    "Information Collected": (
      <section
        id="Information Collected"
        ref={(el) => (sectionsRef.current["Information Collected"] = el)}
      >
        <h3>Information Collected</h3>
        <div className="pri-dec">
          <p>
            We are always open to listen to your feedback anytime anyday have
            something, you want to let us know drop a message below. but first
            check some questions already answered!...
          </p>
        </div>
      </section>
    ),
    Compliance: (
      <section
        id="Compliance"
        ref={(el) => (sectionsRef.current.Compliance = el)}
      >
        <h3>Compliance</h3>
        <div className="pri-dec">
          <p>
            We are always open to listen to your feedback anytime anyday have
            something, you want to let us know drop a message below. but first
            check some questions already answered!...
          </p>
        </div>
      </section>
    ),
    "Age Restriction": (
      <section
        id="Age Restriction"
        ref={(el) => (sectionsRef.current["Age Restriction"] = el)}
      >
        <h3>Age Restriction</h3>
        <div className="pri-dec">
          <p>
            We are always open to listen to your feedback anytime anyday have
            something, you want to let us know drop a message below. but first
            check some questions already answered!...
          </p>
        </div>
      </section>
    ),
    "Feedback & Complaint": (
      <section
        id="Feedback & Complaint"
        ref={(el) => (sectionsRef.current["Feedback & Complaint"] = el)}
      >
        <h3>Feedback & Complaint</h3>
        <div className="pri-dec">
          <p>
            We are always open to listen to your feedback anytime anyday have
            something, you want to let us know drop a message below. but first
            check some questions already answered!...
          </p>
        </div>
      </section>
    ),
  };

  // Function to scroll to the relevant section
  const handleTabClick = (tabId: Tab) => {
    setActiveTab(tabId); // Set the clicked tab as active
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="privacy-tabs-container">
      {/* Header Section */}
      <header className="privacy-h1">
        <h2>
          Policies in this section would help you better understand <br />
          how we collect, use, store, and share your information.
        </h2>
      </header>

      <div className="tabs-content">
        {/* Tabs on the left */}
        <div className="tabs-list">
          <ul>
            {Object.keys(tabContent).map((tab) => (
              <li
                key={tab}
                className={activeTab === tab ? "active" : ""}
                onClick={() => handleTabClick(tab as Tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>

        {/* Render all content sections at once */}
        <div className="tab-panels">{Object.values(tabContent)}</div>
      </div>
    </div>
  );
};

export default PrivacyTabs;
