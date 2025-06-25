import React from 'react';

const SectionTitle = ({textColor, subTitle, mainTitle, description }) => {
  return (
    <div className={`text-center space-y-2 ${textColor} flex flex-col items-center justify-center`}>
      {/* Subtitle */}
      {subTitle && (
        <p className={`capitalize special ${textColor || "text-red-700"}`}>
          {subTitle}
        </p>
      )}

      {/* Main Title */}
      {mainTitle && (
        <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold leading-tight capitalize special ${textColor}`}>
          {mainTitle}
        </h2>
      )}

      {/* Description (Optional) */}
      {description && (
        <p className={`text-lg text-gray-600 max-w-3xl mx-auto md:w-1/2 lg:w-2/3 ${textColor}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;