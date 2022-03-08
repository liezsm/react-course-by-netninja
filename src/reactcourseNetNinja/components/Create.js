import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState();
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = { title, body, author };
    setIsPending(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newBlog),
    }).then(() => {
      console.log("new blog added successfully");
      setIsPending(false);
    });
  };

  return (
    <div className='create'>
      <h2> Add new Blog</h2>

      <form onSubmit={handleSubmit}>
        <label>Blog title: </label>
        <input
          type='text'
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label> Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value='mario'>---</option>
          <option value='mario'>Mario</option>
          <option value='yoshi'>Yoshi</option>
        </select>
        <button>{isPending ? "Adding blog..." : "Add blog"}</button>
      </form>
    </div>
  );
};

export default Create;
