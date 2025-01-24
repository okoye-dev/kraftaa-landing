import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface CarouselProps {
  images: StaticImageData[];
  height?: string;
}

export const Carousel = ({ images }: CarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = scrollContainerRef.current.offsetWidth + 40;
    const newScrollPosition =
      scrollContainerRef.current.scrollLeft +
      (direction === "left" ? -scrollAmount : scrollAmount);

    scrollContainerRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative p-3">
      {/* Carousel container */}
      <div
        ref={scrollContainerRef}
        className="hide-scrollbar flex gap-10 lg:px-10 overflow-x-auto scroll-smooth"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex lg:px-10 h-full w-full lg:w-fit flex-none items-center justify-center object-cover"
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-full w-full max-w-[30rem] flex-none object-cover md:max-w-[35rem] lg:max-w-[30rem]"
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="absolute bottom-4 right-16 sm:right-24 sm:bottom-8 flex gap-2 sm:gap-6 md:right-[7.5rem]">
        <button
          onClick={() => scroll("left")}
          className="rounded-full bg-green-light/70 p-2 text-white backdrop-blur-sm duration-300 hover:opacity-90 sm:scale-150"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="rounded-full bg-purple/50 p-2 text-white backdrop-blur-sm duration-300 hover:opacity-80 sm:scale-150"
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};
