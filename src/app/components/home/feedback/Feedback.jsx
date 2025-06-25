"use client"
import React, { useState } from 'react';

// Sample feedback data
const customerFeedback = [
  {
    id: 1,
    review: "Fresh, flavorful, and just the right amount of heat. The tuna was buttery, the rice well-seasoned, and the chili mayo added a great kick. A must-try for sushi lovers.",
    name: "Tayyab Sohail",
    designation: "UX/UI Designer",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg" // Placeholder for a user avatar
  },
  {
    id: 2,
    review: "Absolutely amazing! The pasta was perfectly al dente, and the sauce had a rich, deep flavor. It's my new favorite spot for Italian food.",
    name: "Jane Doe",
    designation: "Food Critic",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg" // Placeholder for a user avatar
  },
  {
    id: 3,
    review: "The steak was cooked to perfection, tender and juicy. The service was excellent and the atmosphere was very welcoming. Highly recommend!",
    name: "John Smith",
    designation: "Gourmet Enthusiast",
    avatar: "https://randomuser.me/api/portraits/men/50.jpg" // Placeholder for a user avatar
  },
];

const Feedback = () => {
  // State to manage the active feedback index
  const [activeFeedbackIndex, setActiveFeedbackIndex] = useState(0);

  // Get the current feedback based on the index
  const currentFeedback = customerFeedback[activeFeedbackIndex];

  return (
    <section className="bg-white">
      <div className="w-2/3 mx-auto my-20 md:mt-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side: Feedback Text and Pager */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2 className="text-2xl md:text-4xl font-bold special mb-6">Customer <span className='text-red-700'> Feedback</span> </h2>
            
            {/* The animated feedback text */}
            <div className="transition-opacity duration-500 ease-in-out">
              <p className="text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                {currentFeedback.review}
              </p>
              
              {/* Reviewer's info */}
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <img 
                  src={currentFeedback.avatar}
                  alt={currentFeedback.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{currentFeedback.name}</p>
                  <p className="text-sm text-gray-500">{currentFeedback.designation}</p>
                </div>
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center lg:justify-start space-x-2">
              {customerFeedback.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeedbackIndex(index)}
                  className={`
                    w-3 h-3 rounded-full transition-all duration-300
                    ${activeFeedbackIndex === index ? 'bg-red-700 w-8' : 'bg-gray-300'}
                  `}
                  aria-label={`View feedback ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
          
          {/* Right side: Chef Image */}
          <div className="lg:w-1/2 w-full mt-12 lg:mt-0 ">
            <img
              src="https://img.freepik.com/premium-photo/naughty-young-chef-making-rock-gesture_1459-16054.jpg?ga=GA1.1.1518679940.1727447932&semt=ais_hybrid&w=740"
              alt="Naughty chef making a rock gesture"
              className="w-full h-auto max-h-[500px] rounded-lg shadow-2xl object-cover object-top"
            />
            {/* You can add an overlay or badge if needed, similar to the image */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;