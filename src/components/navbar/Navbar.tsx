import React from 'react';

const Navbar = () => {
  return (
    <section className=" fixed w-full bg-white shadow-md h-16">
      <nav className="  flex justify-between h-full items-center px-5 md:px-10 2xl:px-0 max-w-7xl mx-auto">
        <div className=" h-full py-2">
          <img
            src="https://imnotdun.com/static/media/Logomain.5722a40f6123b10c1e1e.png"
            alt=""
            className="h-full"
          />
        </div>
        <ul className=" space-x-9  font-bold text-gray-900 hidden md:flex">
          <li className=" cursor-pointer">Learn With Us</li>
          <li className=" cursor-pointer">Teach With Us</li>
          <li className=" cursor-pointer">Partner With Us</li>
          <li className=" cursor-pointer">Login/Sign Up</li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
