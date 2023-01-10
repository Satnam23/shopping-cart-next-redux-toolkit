import React from 'react';
import Image from 'next/image';
import { Zoom } from 'react-slideshow-image';

const images = [{
  id: 1,
  imageurl: "/Commingsoon.jpg"
},
  // {
    // id: 2,
    // imageurl: "/Commingsoon.jpg" },
];
const ImageSlider = () => {
  return (
    <>
      <div >
        <Zoom scale={0.4} >
          {images.map((index) => <Image
            src={index.imageurl}
            alt="Picture of the author"
            width={1225}
            height={400}
            key={index.id}
          />)}
        </Zoom>
      </div>
    </>
  )
}

export default ImageSlider;