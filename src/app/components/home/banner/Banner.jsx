import React from "react";

const Banner = () => {
  return (
    <div
      className="w-full h-[80vh] bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/burger-chips-hamburger-french-fries-red-paper-box-fast-food-red-background_157927-7849.jpg?ga=GA1.1.1518679940.1727447932&semt=ais_hybrid&w=740')",
      }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content container */}
      <div className="relative z-10 flex justify-between items-start px-6 md:px-12 pt-6 max-w-7xl mx-auto">
        {/* Left: Title */}
        <h1 className="text-white text-2xl md:text-4xl font-bold">Restaurant</h1>

        {/* Right: Search bar */}
        <div className="w-64 md:w-80">
          <input
            type="text"
            placeholder="Search here..."
            className="bg-white w-full px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
