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
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const [name, setName] = useState("mario");
  //   exp it takes a funtion as argument
  //  exp it runs every rerenders or when a state/props/changes

  useEffect(() => {
    //   exp to simulate a loading time, we use setTimeout but in areal word scenario, we shouldn't do it
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          //   console.log(res)
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })

        .then((data) => {
          // console.log(data);
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
    }, 1000);
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
      {error && <div> {error} </div>}
      {isPending && <div> Loading....</div>}
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
