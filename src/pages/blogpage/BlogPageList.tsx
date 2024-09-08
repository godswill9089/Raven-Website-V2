import React, { useState } from "react";
import BlogPage from "./BlogPage";
import "../../styles/blogpage/BlogPage.css"; // Assuming this exists
import Navbar from "../../components/navbar/Navbar";
import { useIcon } from "../../components/hooks/useIcon";
import AppShowcase from "../../components/section/appshowcase/AppShowcase";

// Define the union type for the tab names
type TabNames =
  | "All Resources"
  | "Finance"
  | "Fraud"
  | "Investments"
  | "Growth"
  | "Savings";

const BlogPageList: React.FC = () => {
  const { blog1, blog2, blog3 } = useIcon();
  // Sample blog data
  const initialBlogs = [
    {
      title:
        "How to grow your account from $0 all the way to $1million in 180 days.",
      date: "12 - 04 - 2022",
      category: "Finance",
      imageSrc: blog1,
      link: "/article/1",
    },
    {
      title:
        "How to grow your account from $0 all the way to $1million in 180 days.",
      date: "12 - 04 - 2022",
      category: "Finance",
      imageSrc: blog2,
      link: "/article/1",
    },
    {
      title:
        "How to grow your account from $0 all the way to $1million in 180 days.",
      date: "12 - 04 - 2022",
      category: "Finance",
      imageSrc: blog3,
      link: "/article/1",
    },
    {
      title:
        "How to grow your account from $0 all the way to $1million in 180 days.",
      date: "12 - 04 - 2022",
      category: "Finance",
      imageSrc: blog2,
      link: "/article/1",
    },
    {
      title:
        "How to grow your account from $0 all the way to $1million in 180 days.",
      date: "12 - 04 - 2022",
      category: "Finance",
      imageSrc: blog3,
      link: "/article/1",
    },
    {
      title:
        "How to grow your account from $0 all the way to $1million in 180 days.",
      date: "12 - 04 - 2022",
      category: "Finance",
      imageSrc: blog1,
      link: "/article/1",
    },
    {
      title:
        "How to grow your account from $0 all the way to $1million in 180 days.",
      date: "12 - 04 - 2022",
      category: "Finance",
      imageSrc: blog3,
      link: "/article/1",
    },
    {
      title:
        "How to grow your account from $0 all the way to $1million in 180 days.",
      date: "12 - 04 - 2022",
      category: "Finance",
      imageSrc: blog1,
      link: "/article/1",
    },
    {
      title:
        "How to grow your account from $0 all the way to $1million in 180 days.",
      date: "12 - 04 - 2022",
      category: "Finance",
      imageSrc: blog2,
      link: "/article/1",
    },
    {
      title:
        "How to grow your account from $0 all the way to $1million in 180 days.",
      date: "12 - 04 - 2022",
      category: "Finance",
      imageSrc: blog2,
      link: "/article/1",
    },
    {
      title:
        "How to grow your account from $0 all the way to $1million in 180 days.",
      date: "12 - 04 - 2022",
      category: "Finance",
      imageSrc: blog1,
      link: "/article/1",
    },
    {
      title:
        "How to grow your account from $0 all the way to $1million in 180 days.",
      date: "12 - 04 - 2022",
      category: "Finance",
      imageSrc: blog2,
      link: "/article/1",
    },
    // Additional blog posts...
  ];
  const [blogs] = useState(initialBlogs); // Keeping blogs as state for future extensions
  const [visibleBlogs, setVisibleBlogs] = useState(6); // Show 6 initially
  const [activeTab, setActiveTab] = useState<TabNames>("All Resources"); // Now using TabNames

  // Content for each tab
  const tabContent: Record<TabNames, string> = {
    "All Resources": "Displaying all resources...",
    Finance: "Displaying finance articles...",
    Fraud: "Displaying fraud prevention tips...",
    Investments: "Displaying investment strategies...",
    Growth: "Displaying growth hacks...",
    Savings: "Displaying savings tips...",
  };

  // Function to change the active tab
  const handleTabClick = (tab: TabNames) => {
    setActiveTab(tab);
  };

  // Load more blogs (adds 6 more to visibleBlogs count)
  const loadMoreBlogs = () => {
    setVisibleBlogs((prevVisible) => prevVisible + 6);
  };

  // Filter blogs based on active tab
  const filteredBlogs = blogs.filter((blog) => {
    if (activeTab === "All Resources") return true; // Show all blogs for "All Resources"
    return blog.category === activeTab;
  });

  return (
    <>
      <Navbar />
      <div className="blog-list">
        <p className="head-t">BLOG & ARTICLES</p>
        <h2 className="raven-r">Raven Resources</h2>

        {/* Tab Buttons */}
        <div className="tabs-container">
          {Object.keys(tabContent).map((tab) => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? "active" : ""}`}
              onClick={() => handleTabClick(tab as TabNames)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tab-content"></div>

        {/* Blog Cards Grid */}
        <div className="-container">
          {filteredBlogs.slice(0, visibleBlogs).map((blog, index) => (
            <BlogPage key={index} {...blog} />
          ))}
        </div>

        {/* Load More Button */}
        {visibleBlogs < filteredBlogs.length && (
          <button className="load-more" onClick={loadMoreBlogs}>
            Load More...
          </button>
        )}
      </div>
      <AppShowcase />
    </>
  );
};

export default BlogPageList;
