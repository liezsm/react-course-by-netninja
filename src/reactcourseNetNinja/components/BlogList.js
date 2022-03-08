import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({ blogs, title, onDelete }) => {
  return (
    <div className='blog-list'>
      <h3>{title}</h3>
      {blogs.map(({ id, title, author }) => (
        <div className='blog-preview' key={id}>
          <Link to={`blogs/${id}`}>
            <h2>{title}</h2>
            <p>Written by: {author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
