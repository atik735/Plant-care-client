import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Banner = () => {
const bannerSlides = [
  {
    id: 1,
    title: "Don't Forget to Water Your Plants",
    desc: "Water is life for plants. Keep the soil moist but not soaked. Use your finger to test it before watering.",
    image: "https://i.ibb.co/PnyRRy7/D1-E779-C2-5585-48-B9-B5-B8-CA83481-D212-C-source.webp",
  },
  {
    id: 2,
    title: "Pick the Perfect Plant for Your Space",
    desc: "Bright room? Shady corner? Choose plants that match your light and space. Happy plants = happy home.",
    image: "https://i.ibb.co/SXDBvZRc/Untitled-design-1-1024x576.webp",
  },
  {
    id: 3,
    title: "Let the Sunshine In",
    desc: "Most plants need sunlight for healthy growth. Place them near windows, but protect from harsh noon sun.",
    image: "https://i.ibb.co/QF43rr57/water-plant-growth-1200x.webp",
  },
  {
    id: 4,
    title: "Know Your Plant Types",
    desc: "From succulents to ferns to flowering plants — each one has different needs. Learn a little, grow a lot!",
    image: "https://i.ibb.co/rKJgDFqX/outdoor-potted-plants.jpg"
  },
];


  return (
    <div className="mb-10 px-4 md:px-8">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000 }}
        navigation
        loop
        className="rounded-2xl"
      >
        {bannerSlides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
                <h2 className="text-xl md:text-3xl font-bold">{slide.title}</h2>
                <p className="mt-2 text-sm md:text-base max-w-md">{slide.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
