const BlogList = ({ blogs, title, onDelete }) => {
  return (
    <div className='blog-list'>
      <h3>{title}</h3>
      {blogs.map(({ id, title, author }) => (
        <div className='blog-preview' key={id}>
          <h2>{title}</h2>
          <p>Written by: {author}</p>
          <button
            onClick={() => {
              onDelete(id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
