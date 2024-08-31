import React from "react";
import { FaChevronRight } from "react-icons/fa";

interface BlogCardProps {
  image: string;
  title: string;
  date: string;
  link: string;
}
const BlogCard: React.FC<BlogCardProps> = ({ image, title, date, link }) => {
  return (
    <div className="blog-card">
      <img src={image} alt="Blogcard" className="blog-card-image" />
      <div className="blog-card-content">
        <p className="blog-card-title">{title}</p>
        <p className="blog-card-date">{date}</p>
        <a href={link} className="blog-card-link">
          READ ARTICLE{" "}
          <span className="arrow">
            <FaChevronRight />
          </span>
        </a>
      </div>
    </div>
  );
};
export default BlogCard;
