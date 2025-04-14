
import React from 'react';
import ImagePlaceholder from './ImagePlaceholder';

interface ImageGridProps {
  isGenerating: boolean;
}

const ImageGrid: React.FC<ImageGridProps> = ({ isGenerating }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-5xl mx-auto">
      {isGenerating && Array(6).fill(0).map((_, index) => (
        <ImagePlaceholder key={index} />
      ))}
    </div>
  );
};

export default ImageGrid;
