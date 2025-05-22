import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <div className="mb-10 px-4 md:px-8">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000 }}
        navigation
        loop
        className="rounded-2xl"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb"
              alt="Water Plants"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
              <h2 className="text-xl md:text-3xl font-bold">Water Your Plants Regularly</h2>
              <p className="mt-2 text-sm md:text-base max-w-md">
                Keep them hydrated and happy by following a watering routine that suits each plant.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
              alt="Choose Plant"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
              <h2 className="text-xl md:text-3xl font-bold">Choose the Right Plant</h2>
              <p className="mt-2 text-sm md:text-base max-w-md">
                Indoor? Outdoor? Sun-loving or shade-seeking? Choose wisely for long life.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1524593630581-0192a1f76807"
              alt="Sunlight"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
              <h2 className="text-xl md:text-3xl font-bold">Give Enough Sunlight</h2>
              <p className="mt-2 text-sm md:text-base max-w-md">
                Proper sunlight boosts growth and keeps your plants strong and healthy.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
