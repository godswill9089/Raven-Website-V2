import React from "react";
import { FaChevronRight } from "react-icons/fa";

type BlogCardProps = {
  title: string;
  date: string;
  category: string;
  imageSrc: string;
  link: string;
};

const BlogPage: React.FC<BlogCardProps> = ({
  title,
  date,
  category,
  imageSrc,
  link,
}) => {
  return (
    <>
      <div className="cardss">
        <div className="blog-image">
          <span className="blog-category">{category}</span>
          <img src={imageSrc} alt={title} className="card-cat" />
        </div>
        <div className="blog-info">
          <span className="blog-date">{date}</span>
          <h3 className="blog-title">{title}</h3>
          <a href={link} className="read-more">
            READ ARTICLE{" "}
            <span className="arrow">
              <FaChevronRight />
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
