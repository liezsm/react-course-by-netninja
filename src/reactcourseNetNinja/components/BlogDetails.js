import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  // exp to grab/add the variable id to the router
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch(" http://localhost:8000/blogs/" + id);

  return (
    <div className='blog-details'>
      <h2>Blog details</h2>
      {isPending && <div>Loading....</div>}
      {error && <div> {error} </div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author} </p>
          <div> {blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
