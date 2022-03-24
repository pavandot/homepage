import React from 'react';

const Features = () => {
  return (
    <section className=" pt-20 md:pt-24 mb-10 lg:pt-32 max-w-7xl px-5 md:px-10 2xl:px-0 mx-auto">
      <h1 className="text-gray-900 text-3xl font-bold md:text-3xl lg:text-5xl xl:text-6xl">
        Learn digital-age skills online.
      </h1>
      <div className=" grid md:grid-cols-2 xl:grid-cols-3 mt-10 md:mt-14 2xl:mt-16">
        <div className=" p-5 w-80 mx-auto md:mx-0 lg:w-auto rounded-md bg-gray-100 lg:space-x-5 space-y-5 lg:space-y-0 shadow-md flex flex-col justify-center items-center lg:items-start lg:justify-between lg:flex-row  ">
          <img
            src="https://imnotdun.com/static/media/YOURWAY.b2ffe8ab67185627dc9d0fdd8d3cce58.svg"
            alt=""
            className=" w-28 md:w-36"
          />
          <div className=" text-gray-900 space-y-2 md:space-y-5 text-center lg:text-left">
            <h1 className=" text-2xl">YOUR WAY</h1>
            <p>
              Learn LIVE online in a small group of like-minded people, or watch video
              lessons in your own time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
