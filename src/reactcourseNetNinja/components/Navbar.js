const Navbar = () => {
  // todo normal func
  const handleClick = () => {
    console.log("hello ninjas");
  };
  //   todo when passing an argument
  const handleClickagain = (name) => {
    console.log(name);
  };

  return (
    <nav className='navbar'>
      <h1>Dojo blog</h1>
      <div className='links'>
        <a href='/'>Home</a>
        <a href='/create'>New blog</a>
        <button onClick={handleClick}>Click me</button>
        <button
          onClick={() => {
            handleClickagain("test");
          }}
        >
          Click me!
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
