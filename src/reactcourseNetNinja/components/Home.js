import { useState } from "react";

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
    { title: "Welcome party!", body: "lorem ipsum...", author: "mario", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  return (
    <div className='home'>
      <h2>Homepage</h2>
      {/* <p>
        {" "}
        {name} is {age}{" "}
      </p>
      <button onClick={handleClick}>Click me</button> */}

      <BlogList blogs={blogs} title='All blogs..' />
    </div>
  );
};

export default Home;
