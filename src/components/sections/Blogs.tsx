import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle } from 'lucide-react';

const blogs = [
  {
    id: '1',
    title: 'Getting Started with React 18',
    description: 'Learn about the new features in React 18 and how to use them effectively...',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
    date: '2024-03-01',
    readTime: '2 min read',
    likes: 42,
    comments: 8,
    url: '#',
  },
  {
    id: '2',
    title: 'TypeScript Best Practices',
    description: 'Discover the best practices for writing clean and maintainable TypeScript code...',
    thumbnail: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481',
    date: '2024-02-28',
    readTime: '3 min read',
    likes: 35,
    comments: 12,
    url: '#',
  },
];

export const Blogs = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#2d2d2d] rounded-lg overflow-hidden"
          >
            <div className="relative overflow-hidden">
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 space-y-2">
              <div className="flex justify-between text-sm text-gray-400">
                <span>{blog.date}</span>
                <div className="flex space-x-4">
                  <span className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>{blog.likes}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{blog.comments}</span>
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-200">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-400">{blog.readTime}</p>
              <p className="text-gray-300">{blog.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-end">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          View More
        </button>
      </div>
    </div>
  );
};