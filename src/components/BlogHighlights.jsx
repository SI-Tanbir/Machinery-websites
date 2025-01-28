import React from 'react';
import Link from 'next/link';

const blogPosts = [
    {
      id: 1,
      title: "Maximizing Efficiency with Mini Excavators",
      thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      link: "/blog/maximizing-efficiency-with-mini-excavators",
    },
    {
      id: 2,
      title: "Top 10 Construction Tools for 2023",
      thumbnail: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      link: "/blog/top-10-construction-tools-for-2023",
    },
    {
      id: 3,
      title: "Sustainable Building Practices",
      thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      link: "/blog/sustainable-building-practices",
    },
    {
      id: 4,
      title: "How to Choose the Right Excavator for Your Project",
      thumbnail: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      link: "/blog/how-to-choose-the-right-excavator",
    },
  ];

const BlogHighlights = () => {
  return (
    <div className="p-8 bg-base-100">
      <h2 className="text-3xl font-bold text-center mb-8">News & Blog Highlights</h2>
      <div className="flex overflow-x-auto gap-6 pb-4">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="flex-shrink-0 w-80 bg-base-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <Link href={post.link}>
                <button className="btn btn-primary">Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogHighlights;