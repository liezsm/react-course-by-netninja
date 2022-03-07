const BlogList = ({ blogs, title }) => {
  return (
    <div className='blog-list'>
      <h3>{title}</h3>
      {blogs.map(({ id, title, author }) => (
        <div className='blog-preview' key={id}>
          <h2>{title}</h2>
          <p>Written by: {author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
