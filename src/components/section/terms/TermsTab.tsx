import React, { useState, useRef, useEffect } from "react";

// Define the types for the tabs
type Tab =
  | "Introduction"
  | "Obligations"
  | "Property"
  | "Termination"
  | "Governing Law";

const TermsTabs: React.FC = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState<Tab>("Introduction");
  const sectionsRef = useRef<Record<Tab, HTMLElement | null>>({
    Introduction: null,
    Obligations: null,
    Property: null,
    Termination: null,
    "Governing Law": null,
  });

  useEffect(() => {
    // Set up IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get the ID of the intersecting section
            const tab = entry.target.id as Tab;
            setActiveTab(tab); // Update the active tab
          }
        });
      },
      { threshold: 0.5 } // Adjust this threshold as needed (50% of the section is visible)
    );

    // Observe each section
    Object.values(sectionsRef.current).forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    // Clean up observer on unmount
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
        <p>
          Welcome to our Terms and Conditions page. By using our services, you
          agree to comply with the following terms, which govern your use of our
          platform. Please read them carefully. These terms are governed by and
          construed in accordance with the laws of [Your Jurisdiction]. Any
          disputes arising out of or relating to these terms will be subject to
          the exclusive jurisdiction of the courts located in [Your
          Jurisdiction].
          <br />
          <br />
          These terms are governed by and construed in accordance with the laws
          of [Your Jurisdiction]. Any disputes arising out of or relating to
          these terms will be subject to the exclusive jurisdiction of the
          courts located in [Your Jurisdiction].
        </p>
      </section>
    ),
    Obligations: (
      <section
        id="Obligations"
        ref={(el) => (sectionsRef.current.Obligations = el)}
      >
        <h3>User Obligations</h3>
        <p>
          As a user of our services, you are responsible for adhering to the
          rules and guidelines set out in this document. You must ensure that
          your use of our platform is in compliance with all applicable laws and
          does not infringe on the rights of others.
        </p>
      </section>
    ),
    Property: (
      <section id="Property" ref={(el) => (sectionsRef.current.Property = el)}>
        <h3>Intellectual Property</h3>
        <p>
          All content on this platform, including but not limited to text,
          graphics, and code, is the property of our company or our licensors
          and is protected by copyright, trademark, and other intellectual
          property laws. Unauthorized use of this content is strictly
          prohibited.
        </p>
      </section>
    ),
    Termination: (
      <section
        id="Termination"
        ref={(el) => (sectionsRef.current.Termination = el)}
      >
        <h3>Termination</h3>
        <p>
          We reserve the right to terminate or suspend your access to our
          platform at any time if we determine that you have violated these
          terms. This termination may occur without notice and may result in the
          forfeiture of any rights granted to you under these terms. These terms
          are governed by and construed in accordance with the laws of [Your
          Jurisdiction]. Any disputes arising out of or relating to these terms
          will be subject to the exclusive jurisdiction of the courts located in
          [Your Jurisdiction].
          <br />
          <br /> These terms are governed by and construed in accordance with
          the laws of [Your Jurisdiction]. Any disputes arising out of or
          relating to these terms will be subject to the exclusive jurisdiction
          of the courts located in [Your Jurisdiction].
        </p>
      </section>
    ),
    "Governing Law": (
      <section
        id="Governing Law"
        ref={(el) => (sectionsRef.current["Governing Law"] = el)}
      >
        <h3>Governing Law</h3>
        <p>
          These terms are governed by and construed in accordance with the laws
          of [Your Jurisdiction]. Any disputes arising out of or relating to
          these terms will be subject to the exclusive jurisdiction of the
          courts located in [Your Jurisdiction]. These terms are governed by and
          construed in accordance with the laws of [Your Jurisdiction]. Any
          disputes arising out of or relating to these terms will be subject to
          the exclusive jurisdiction of the courts located in [Your
          Jurisdiction].
          <br />
          <br /> These terms are governed by and construed in accordance with
          the laws of [Your Jurisdiction]. Any disputes arising out of or
          relating to these terms will be subject to the exclusive jurisdiction
          of the courts located in [Your Jurisdiction].
        </p>
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
    <div className="terms-tabs-container">
      {/* Header Section */}
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

export default TermsTabs;
