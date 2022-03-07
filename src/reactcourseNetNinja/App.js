import React from "react";

import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  //  const title = "Welcome to the new blog";
  //  const likes = 50;
  //  const person = { name: "yoshi", age:30}
  // //  exp objects and booleans can't be output

  // const link = 'http://www.google.con';

  return (
    <div className='App'>
      {/* <div className="content">
            <h1> { title } </h1>
            <p> Liked { likes } times</p>
            <p> { 'hello ninjas'}</p>
            <p> {[1,2,33,4,5]}</p>
            <p>{Math.random() * 10}</p>
            <a href={link}>Google</a>
           
        </div> */}

      {/* //todo part: componsing multiple components */}

      <Navbar />
      <div className='content'>
        <Home />
      </div>
    </div>
  );
};

export default App;
