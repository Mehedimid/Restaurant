import React from "react";

const Banner = () => {
  return (
    <div
      className="w-full h-screen md:h-[80vh] bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/burger-chips-hamburger-french-fries-red-paper-box-fast-food-red-background_157927-7849.jpg?ga=GA1.1.1518679940.1727447932&semt=ais_hybrid&w=740')",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Top content (title  and search) div */}
      <div className=" flex md:flex-row flex-col relative z-10 justify-center items-center md:justify-between md:items-start md:w-3/4 pt-6  mx-auto">
        <h1 className="text-white text-xl md:text-4xl font-bold">Restaurant</h1>

        <div className="w-64 md:w-80">
          <input
            type="text"
            placeholder="Search here..."
            className="bg-white w-full px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>
      </div>

      {/* Centered title and description */}
      <div className="relative flex flex-col justify-center items-center text-center h-full px-4 pb-20">
        <h2 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold mb-4">Breakfast</h2>
        <p className="text-white max-w-2xl text-sm md:text-base leading-relaxed">
          Start your day with our delightful breakfast offerings, made fresh with love and high-quality ingredients. From crispy toast to fluffy eggs and savory sides, every bite is crafted to energize and satisfy your morning cravings. Whether you're on-the-go or dining in, our breakfast will brighten your day.
        </p>
      </div>
    </div>
  );
};

export default Banner;