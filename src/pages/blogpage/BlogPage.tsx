import React from "react";

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
          <img src={imageSrc} alt={title} />
        </div>
        <div className="blog-info">
          <span className="blog-category">{category}</span>
          <span className="blog-date">{date}</span>
          <h3 className="blog-title">{title}</h3>
          <a href={link} className="read-more">
            Read Article
          </a>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
