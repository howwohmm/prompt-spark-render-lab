
import React from 'react';

interface ImagePlaceholderProps {
  isLoading?: boolean;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ isLoading = true }) => {
  return (
    <div className={`image-placeholder ${isLoading ? 'animate-pulse' : ''}`}>
      <p className="image-placeholder-text">Image is being generated...</p>
    </div>
  );
};

export default ImagePlaceholder;
