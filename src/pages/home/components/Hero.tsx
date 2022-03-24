import React from 'react';

import HeroImage from '../../../asset/Hero.png';
const Hero = () => {
  return (
    <section className=" pt-20 md:pt-24 lg:pt-32 max-w-7xl px-5 md:px-10 2xl:px-0 mx-auto">
      <div className=" flex flex-col space-y-10 lg:space-y-0 lg:flex-row justify-between items-center">
        <div className=" max-w-lg lg:max-w-max space-y-5">
          <p className=" text-2xl md:text-3xl text-indigo-500  2xl:text-4xl font-bold">
            Imnotdun
          </p>
          <h1 className=" text-gray-900 text-3xl font-bold md:text-4xl lg:text-5xl xl:text-7xl  ">
            Money and More... For the middle aged consumer
          </h1>
          <h2 className=" text-xl md:text-2xl 2xl:text-3xl">
            Contemporary skills for the <span className=" text-indigo-500">wiser</span>{' '}
            generation
          </h2>
          <a
            href="/"
            className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-gray-100 transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-indigo-500 hover:bg-indigo-600 focus:shadow-outline focus:outline-none"
          >
            Get started
          </a>
        </div>
        <img src={HeroImage} alt="" className=" w-96 lg:w-2/5" />
      </div>
    </section>
  );
};

export default Hero;
