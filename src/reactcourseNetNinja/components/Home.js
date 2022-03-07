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

  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "sam", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const [name, setName] = useState("mario");
  //   exp it takes a funtion as argument
  //  exp it runs every rerenders or when a state/props/changes

  useEffect(() => console.log("useeffect ran"), [name]);

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

      <BlogList blogs={blogs} title='All blogs..' onDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title='Marios blogs..'
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
