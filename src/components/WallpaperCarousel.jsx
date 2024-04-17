import React, { useState } from 'react';

const WallpaperCarousel = ({ wallpapers }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === wallpapers.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? wallpapers.length - 1 : prevIndex - 1));
    };

    return (
        <div className="relative">
            <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg" onClick={prevSlide}>
                Previous
            </button>
            <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg" onClick={nextSlide}>
                Next
            </button>
            <div className="flex justify-center items-center h-96 overflow-hidden">
                {wallpapers.map((wallpaper, index) => (
                    <div
                        key={index}
                        className={`w-full h-full transition-transform duration-500 ${
                            index === currentIndex ? 'translate-x-0' : 'translate-x-full'
                        }`}
                        style={{
                            backgroundImage: `url(${wallpaper})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '1rem'
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default WallpaperCarousel;
