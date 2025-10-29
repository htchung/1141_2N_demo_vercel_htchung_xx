import { useState } from 'react';

import blogData_xx from '../assets/data/blogData.json';
import Blog_xx from '../components/Blog_xx';
import Wrapper from '../assets/wrappers/Blog2_xx';

const BlogLocalJsonPage_xx = () => {
  const [name, setName] = useState('htchung');
  const [id, setId] = useState(123456789);
  const [blogs_xx, setBlogs_xx] = useState(blogData_xx);
  return (
    <Wrapper>
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            blogs from local json -- {name}, {id}{' '}
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

export default BlogLocalJsonPage_xx;
