import { Link } from "react-router-dom";

const Navbar = () => {
  // todo normal func
  //   const handleClick = () => {
  //     console.log("hello ninjas");
  //   };
  //   todo when passing an argument
  //   const handleClickagain = (name) => {
  //     console.log(name);
  //   };

  return (
    <nav className='navbar'>
      <h1>Dojo blog</h1>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/create'>New blog</Link>
        {/* <button>Click me</button> */}
      </div>
    </nav>
  );
};

export default Navbar;
