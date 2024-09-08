import React from "react";
import BlogCard from "./BlogCard";
import "../../../styles/blogcard/BlogCard.css";
import { useIcon } from "../../hooks/useIcon";
import { NavLink } from "react-router-dom";

const BlogCardList: React.FC = () => {
  const { blog1, blog2, blog3 } = useIcon();

  const blogCardsData = [
    {
      image: blog1,
      title:
        "How to grow your account from $0 all the way to $1million in 150 days.",
      date: "12-04-2022",
      link: "#",
    },
    {
      image: blog2,
      title:
        "How to grow your account from $0 all the way to $1million in 150 days.",
      date: "12-04-2022",
      link: "#",
    },
    {
      image: blog3,
      title:
        "How to grow your account from $0 all the way to $1million in 150 days.",
      date: "12-04-2022",
      link: "#",
    },
  ];

  return (
    <>
      <div className="blog-des-main">
        <div className="blog-dec">
          <h1>
            Resources to help you <br /> grow your finance.
          </h1>
          <div className="read-more">
            <NavLink to="blogpage" className="read-more-button">
              Read More Articles
            </NavLink>
          </div>
        </div>
        <div className="blog-card-list">
          {blogCardsData.map((card, index) => (
            <BlogCard
              key={index}
              image={card.image}
              title={card.title}
              date={card.date}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogCardList;
