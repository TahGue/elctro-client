import React from 'react';
import ImageGallery from 'react-image-gallery';

function ImageSlider({ images }) {
  const displayedImages = images.map((image) => {
    return {
      original: image,
      thumbnail: image,
    };
  });
  return <ImageGallery items={displayedImages} />;
}

export default ImageSlider;
