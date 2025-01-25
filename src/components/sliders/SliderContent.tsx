"use client";

import { useRef, useState } from "react";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import { Button } from "@/components/ui/button";

interface SliderContentProps<T> {
  data: T[];
  itemsPerSlide: number;
  currentIndex: number;
  goToNext: () => void;
  goToPrev: () => void;
  renderItem: (item: T) => React.ReactNode; // Render function for dynamic children
}

const SliderContent = <T,>({
  data,
  itemsPerSlide,
  currentIndex,
  goToNext,
  goToPrev,
  renderItem,
}: SliderContentProps<T>) => {
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const draggedXRef = useRef(0);

  const sliderStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
    gridTemplateColumns: `repeat(${data.length}, ${100 / itemsPerSlide}%)`,
  };

  // Dragging Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startXRef.current = e.clientX;
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    draggedXRef.current = e.clientX - startXRef.current;
  };

  const handleMouseUp = () => {
    if (isDragging) {
      if (draggedXRef.current > 100) {
        goToPrev();
      } else if (draggedXRef.current < -100) {
        goToNext();
      }
      setIsDragging(false);
      draggedXRef.current = 0;
    }
  };

  return (
    <div className='relative flex items-center w-full'>
      {/* Previous Button */}
      {currentIndex > 0 && (
        <Button
          onClick={goToPrev}
          className='absolute left-2 z-10 bg-slate-100 hover:bg-slate-600 hover:text-white'>
          <TiArrowLeft size={24} />
        </Button>
      )}

      {/* Slider */}
      <div className='overflow-hidden w-full'>
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={() => setIsDragging(false)}
          className='flex transition-transform cursor-pointer duration-500 ease-in-out'
          style={sliderStyle}>
          {data.map((item, index) => (
            <div
              key={index}
              className='flex-shrink-0 px-2'
              style={{ width: `${100 / itemsPerSlide}%` }}>
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>

      {/* Next Button */}
      {currentIndex < Math.ceil(data.length / itemsPerSlide) - 1 && (
        <Button
          onClick={goToNext}
          className='absolute right-2 z-10 bg-slate-100 hover:bg-slate-600 hover:text-white'>
          <TiArrowRight size={24} />
        </Button>
      )}
    </div>
  );
};

export default SliderContent;
