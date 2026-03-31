import { useState } from 'react';

const ImageWithBlur = ({ src, alt, className = '', ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`transition-all duration-500 ${
          isLoaded ? 'filter-none opacity-100' : 'filter blur-sm opacity-70'
        }`}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
};

export default ImageWithBlur;