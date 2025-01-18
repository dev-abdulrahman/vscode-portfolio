import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Heart, MessageCircle } from 'lucide-react';
import { Article } from './../../types';
import ToText from './../../helper/ToText';

// const blogs = [
//   {
//     id: '1',
//     title: 'Getting Started with React 18',
//     description:
//       'Learn about the new features in React 18 and how to use them effectively...',
//     thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
//     date: '2024-03-01',
//     readTime: '2 min read',
//     likes: 42,
//     comments: 8,
//     url: '#',
//   },
//   {
//     id: '2',
//     title: 'TypeScript Best Practices',
//     description:
//       'Discover the best practices for writing clean and maintainable TypeScript code...',
//     thumbnail: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481',
//     date: '2024-02-28',
//     readTime: '3 min read',
//     likes: 35,
//     comments: 12,
//     url: '#',
//   },
// ];

export const Blogs = () => {
  const [blogs, setBlogs] = useState<Article[]>([]);

  const getFormatDate = (date: Date) => {
    let day = date.getDate();
    if (day < 10) {
      day = '0' + day;
    }
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    let year = date.getFullYear();
    return day + '/' + month + '/' + year;
  };

  const getLocalStorage = (key: string) => {
    if (
      localStorage.getItem(key) === null ||
      localStorage.getItem(key) === undefined
    ) {
      let count = getNumbers();
      localStorage.setItem(key, count.toString());
      return count;
    }
    return localStorage.getItem(key);
  };

  const getLikesCount = (guid: string) => {
    let keyName = guid + 'likes';
    return getLocalStorage(keyName);
  };

  const getCommentsCount = (guid: string) => {
    let keyName = guid + 'comments';
    return getLocalStorage(keyName);
  };

  const getNumbers = () => {
    const min = 1;
    const max = 20;
    return Math.floor(min + Math.random() * (max - min));
  };

  const getPostData = () => {
    const mediumUrl = 'https://medium.com/feed/@arabdulrahman619';
    axios
      .get(`https://api.rss2json.com/v1/api.json?rss_url=${mediumUrl}`)
      .then((res) => {
        const items = res.data.items as Article[];
        setBlogs(items);
      })
      .catch((error) => {
        console.error('Error fetching blog posts:', error);
      });
  };
  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div className='space-y-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {blogs
          .sort((a, b) => (a.pubDate < b.pubDate ? 1 : -1)) // order by the blogs in descending order
          .map((blog) => (
            <motion.div
              key={blog.guid}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className='bg-[#2d2d2d] rounded-lg overflow-hidden'
            >
              <div className='relative overflow-hidden'>
                <a href={blog.link} target='_blank'>
                  <img
                    src={blog.description.match(/<img[^>]+src="([^">]+)"/)?.[1]} // to extract the img from the content
                    // src={blog.thumbnail}
                    alt={blog.title}
                    className='w-full h-48 object-cover transition-transform duration-300 hover:scale-105'
                  />
                </a>
              </div>
              <div className='p-4 space-y-2'>
                <div className='flex justify-between text-sm text-gray-400'>
                  <span>{getFormatDate(new Date(blog.pubDate))}</span>
                  <div className='flex space-x-4'>
                    <span className='flex items-center space-x-1'>
                      <Heart className='w-4 h-4 fill-red-600' />
                      {<span>{getLikesCount(blog.guid)}</span>}
                    </span>
                    <span className='flex items-center space-x-1'>
                      <MessageCircle className='w-4 h-4 fill-white' />
                      {<span>{getCommentsCount(blog.guid)}</span>}
                    </span>
                  </div>
                </div>
                <a
                  href={blog.link}
                  className='text-2xl font-bold tracking-tight text-blue-500 dark:text-white'
                  target='_blank'
                >
                  {blog.title}
                </a>
                {/* <p className='text-sm text-gray-400'>{blog.readTime}</p> */}
                {/* <p className='text-gray-300'>
                {blog.description.substring(0, 100)}...
              </p> */}
                {/* <p className='mb-3 font-normal text-gray-200 dark:text-gray-400'>
                Tags:{' '}
                {blog.categories.map((category, index) => (
                  <a href={`#${category}`} key={index}>
                    {category}
                    {index < blog.categories.length - 1 && ', '}
                  </a>
                ))}
              </p> */}
                <p>
                  {`${ToText(blog.description.substring(0, 300))}...`}

                  <a
                    href={blog.link}
                    className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-400 rounded-lg hover:text-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-end'
                    target='_blank'
                  >
                    Read more
                    <svg
                      className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 14 10'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M1 5h12m0 0L9 1m4 4L9 9'
                      />
                    </svg>
                  </a>
                </p>
              </div>
            </motion.div>
          ))}
      </div>
      {/* <div className='flex justify-end'>
        <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
          View More
        </button>
      </div> */}
    </div>
  );
};
