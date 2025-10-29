import { useState, useEffect } from 'react';

// import blogData_xx from '../assets/data/blogData.json';
import Blog_xx from '../components/Blog_xx';
import Wrapper from '../assets/wrappers/Blog2_xx';

// const api_url = 'http://localhost:5000/api/blog_xx';

import { supabase } from '../db/clientSupabase';

const BlogSupaPage_xx = () => {
  const [name, setName] = useState('htchung');
  const [id, setId] = useState(123456789);
  const [blogs_xx, setBlogs_xx] = useState([]);

  const fetchBlogFromSupaServer = async () => {
    try {
      let { data, error } = await supabase.from('blog_xx').select('*');
      // const response = await fetch(api_url);
      // const data = await response.json();
      console.log('blogs', data);
      setBlogs_xx(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogFromSupaServer();
  }, []);

  return (
    <Wrapper>
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            blogs from Supabase -- {name}, {id}{' '}
          </h2>
        </div>
        <div className='blogs-center'>
          {blogs_xx.map((item) => {
            const { id, title, descrip, category, img } = item;
            return (
              <Blog_xx
                key={id}
                id={id}
                title={title}
                descrip={descrip}
                category={category}
                img={img}
              />
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

export default BlogSupaPage_xx;
