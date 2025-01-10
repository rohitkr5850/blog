import React from "react";

const blogs = [
  { title: "React Basics", content: "Learn the basics of React.", isFeatured: true },
  { title: "Advanced React", content: "Delve deeper into React.", isFeatured: false },
  { title: "React Performance Tips", content: "Optimize your React apps.", isFeatured: true },
];
const BlogPage = () => {
  return (
    <div>
      <h1>Dynamic Blog Page</h1>
      {blogs.map((blog, index) => (
        <div
          key={index}
          style={{
            backgroundColor: blog.isFeatured ? "lightyellow" : "white",
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
