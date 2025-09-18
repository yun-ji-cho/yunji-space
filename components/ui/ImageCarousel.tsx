import React, { useState } from "react";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  title?: string;
}

export default function ImageCarousel({ images, title }: ImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div>
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
          <Camera className="mr-2 w-5 h-5 text-blue-600" />
          {title}
        </h3>
      )}
      <div className="relative bg-gray-100 rounded-lg overflow-hidden">
        {/* 이미지 */}
        <div
          className="relative w-full aspect-video"
          role="tabpanel"
          id={`image-panel-${currentImageIndex}`}
          aria-label={`${images.length}개 중 ${currentImageIndex + 1}번째 이미지`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[currentImageIndex]}
            alt={`Screenshot ${currentImageIndex + 1}`}
            className="w-full h-full object-contain"
          />
        </div>

        {images.length > 1 && (
          <>
            {/* 이전 버튼 */}
            <button
              onClick={() =>
                setCurrentImageIndex((prev) =>
                  prev === 0 ? images.length - 1 : prev - 1,
                )
              }
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-20 text-white p-2 rounded-full hover:bg-opacity-50 transition-all"
              aria-label="이전 이미지"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* 다음 버튼 */}
            <button
              onClick={() =>
                setCurrentImageIndex((prev) =>
                  prev === images.length - 1 ? 0 : prev + 1,
                )
              }
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-20 text-white p-2 rounded-full hover:bg-opacity-50 transition-all"
              aria-label="다음 이미지"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* 인디케이터 */}
            <div
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm"
              role="tablist"
              aria-label="이미지 선택"
            >
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentImageIndex === index
                      ? "bg-white w-6"
                      : "bg-white/60 w-2 hover:bg-white/80"
                  }`}
                  role="tab"
                  aria-selected={currentImageIndex === index}
                  aria-label={`${images.length}개 중 ${index + 1}번째 이미지`}
                  aria-controls={`image-panel-${index}`}
                />
              ))}
            </div>
          </>
        )}

        {/* 이미지 카운터 */}
        {images.length > 1 && (
          <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
            {currentImageIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
}
