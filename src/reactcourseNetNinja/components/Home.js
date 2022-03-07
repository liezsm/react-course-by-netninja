import { useState, useEffect } from "react";

import BlogList from "./BlogList";
const Home = () => {
  // todo part: useState hook
  // exp value of useState can be array, obj, boolean, number, string

  //   const [name, setName] = useState("mario");
  //   const [age, setAge] = useState(25);

  //   const handleClick = () => {
  //     setName("luigi");
  //     setAge(40);
  //   };

  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState("mario");
  //   exp it takes a funtion as argument
  //  exp it runs every rerenders or when a state/props/changes

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBlogs(data);
      });
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    const updatedblogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedblogs);
    // console.log(updatedBlogs);
  };

  return (
    <div className='home'>
      <h2>Homepage</h2>

      <button onClick={() => setName("luigi")}>Change me</button>
      <p>{name}</p>
      {/* <p>
        {" "}
        {name} is {age}{" "}
      </p>
      <button onClick={handleClick}>Click me</button> */}

      {blogs && (
        <BlogList blogs={blogs} title='All blogs..' onDelete={handleDelete} />
      )}

      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title='Marios blogs..'
        onDelete={handleDelete}
      /> */}
    </div>
  );
};

export default Home;
