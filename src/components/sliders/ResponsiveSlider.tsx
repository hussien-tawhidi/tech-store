"use client";

import { useEffect, useState } from "react";
import SliderContent from "./SliderContent";

interface ResponsiveSliderProps<T> {
  data: any;
  renderItem: (item: T) => React.ReactNode; // Render function for dynamic children
}

const ResponsiveSlider = <T,>({
  data,
  renderItem,
}: ResponsiveSliderProps<T>) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(6); // Default to 6 items

  // Adjust items per slide based on screen size
  const updateItemsPerSlide = () => {
    if (window.innerWidth <= 480) {
      setItemsPerSlide(1); // Small screens: 1 item
    } else if (window.innerWidth <= 768) {
      setItemsPerSlide(2); // Medium screens: 2 items
    } else if (window.innerWidth <= 1024) {
      setItemsPerSlide(4); // Large screens: 4 items
    } else {
      setItemsPerSlide(5); // Extra-large screens: 5 items
    }
  };

  useEffect(() => {
    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(data.length / itemsPerSlide);

  // Handlers for navigation
  const goToNext = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex < totalSlides - 1 ? prevIndex + 1 : 0
    );

  const goToPrev = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalSlides - 1
    );

  return (
    <div className='relative flex flex-col items-center w-full overflow-hidden'>
      <SliderContent
        data={data}
        renderItem={renderItem}
        itemsPerSlide={itemsPerSlide}
        currentIndex={currentIndex}
        goToNext={goToNext}
        goToPrev={goToPrev}
      />
    </div>
  );
};

export default ResponsiveSlider;
