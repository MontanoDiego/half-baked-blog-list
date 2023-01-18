
import { useEffect, useState } from 'react';
import { fetchBlogs } from '../services/fetchBlogs.js';

export function useBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchBlogs();
      setBlogs(response);
    };
    fetchData();
  }, []);
  return blogs;
}