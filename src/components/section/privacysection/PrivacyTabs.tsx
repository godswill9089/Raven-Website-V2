import React, { useState } from "react";
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

  // Content for each tab
  const tabContent: Record<Tab, JSX.Element> = {
    Introduction: (
      <section id="Introduction">
        <h3>Introduction</h3>
        <div className="pri-dec">
          <p>
            We are always open to listen to your feedback anytime anyday have
            something, you want to let us know drop a message below. but first
            check some questions already answered!.We are always open to listen
            to your feedback anytime anyday have something, you want to let us
            know drop a message below. but first check some questions already
            answered!.
          </p>
        </div>
      </section>
    ),
    "Information Collected": (
      <section id="Information Collected">
        <h3>Information Collected</h3>
        <div className="pri-dec">
          <p>
            We are always open to listen to your feedback anytime anyday have
            something, you want to let us know drop a message below. but first
            check some questions already answered!.We are always open to listen
            to your feedback anytime anyday have something, you want to let us
            know drop a message below. but first check some questions already
            <br />
            <br />
            answered!. check some questions already answered!.We are always open
            to listen to your feedback anytime anyday have something, you want
            to let us know drop a message below. but first check some questions
            already answered!.
          </p>
        </div>
      </section>
    ),
    Compliance: (
      <section id="Compliance">
        <h3>Compliance</h3>
        <div className="pri-dec">
          <p>
            We are always open to listen to your feedback anytime anyday have
            something, you want to let us know drop a message below. but first
            check some questions already answered!.We are always open to listen
            to your feedback anytime anyday have something, you want to let us
            know drop a message below. but first check some questions already
            answered!.
            <br />
            <br />
            answered!. check some questions already answered!.We are always open
            to listen to your feedback anytime anyday have something, you want
            to let us know drop a message below. but first check some questions
            already answered!.
          </p>
        </div>
      </section>
    ),
    "Age Restriction": (
      <section id="Age Restriction">
        <h3>Age Restriction</h3>
        <div className="pri-dec">
          <p>
            We are always open to listen to your feedback anytime anyday have
            something, you want to let us know drop a message below. but first
            check some questions already answered!.We are always open to listen
            to your feedback anytime anyday have something, you want to let us
            know drop a message below. but first check some questions already
            answered!.
            <br />
            <br />
            answered!. check some questions already answered!.We are always open
            to listen to your feedback anytime anyday have something, you want
            to let us know drop a message below. but first check some questions
            already answered!.
          </p>
        </div>
      </section>
    ),
    "Feedback & Complaint": (
      <section id="Feedback & Complaint">
        <h3>Feedback & Complaint</h3>
        <div className="pri-dec">
          <p>
            We are always open to listen to your feedback anytime anyday have
            something, you want to let us know drop a message below. but first
            check some questions already answered!.We are always open to listen
            to your feedback anytime anyday have something, you want to let us
            know drop a message below. but first check some questions already
            answered!.
            <br />
            <br />
            answered!. check some questions already answered!.We are always open
            to listen to your feedback anytime anyday have something, you want
            to let us know drop a message below. but first check some questions
            already answered!.
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
