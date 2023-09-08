import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface CarouselProps {
    images: StaticImageData[]; 
}

export const CarouselSlide = ({ images }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    return (
        <div className="w-full relative overflow-hidden m-auto max-w-[90%] mt-[8%]">
        <div className="flex transition-transform ease-in-out duration-300 cursor-pointer" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="flex w-full h-auto flex-shrink-0 items-center justify-center">
              <Image src={image} alt={`Image ${index}`} className="object-cover" priority />
            </div>
          ))}
        </div>
        <button className="absolute transform -translate-y-[100%] left-0 px-4 py-2 text-yellow-500 cursor-pointer" onClick={handlePrev}>
          Prev
        </button>
        <button className="absolute transform -translate-y-[100%] right-0 px-4 py-2 text-yellow-500 cursor-pointer" onClick={handleNext}>
          Next
        </button>
      </div>
    );
  };
  
  export default CarouselSlide;