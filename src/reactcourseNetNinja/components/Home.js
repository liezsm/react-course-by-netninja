import { useState } from "react";

const Home = () => {
  // todo part: useState hook
  // exp value of useState can be array, obj, boolean, number, string

  const [name, setName] = useState("mario");
  const [age, setAge] = useState(25);

  const handleClick = () => {
    setName("luigi");
    setAge(40);
  };

  return (
    <div className='home'>
      <h2>Homepage</h2>
      <p>
        {" "}
        {name} is {age}{" "}
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
