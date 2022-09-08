import React from 'react';
import ImageGallery from 'react-image-gallery';
import { BsChevronLeft } from 'react-icons/bs';

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
