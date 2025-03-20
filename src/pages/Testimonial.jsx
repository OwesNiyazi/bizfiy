import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonial = () => {
  const testimonials = [
    {
      quote: "We are delighted with our AI development subscription from bizfy.",
      para: "Cannot recommend Bizfy enough, they absolutely transformed us into a productive machine!",
      name: "Peter Davis",
      title: "CTO - Atomic",
      avatar: "https://via.placeholder.com/50",
    },
    {
      quote: "Their AI-development consulting report was absolutely eye-opening.",
      para: "Their flexible subscription model is so innovative we can just pause whenever we want!",
      name: "Sofie Bezos",
      title: "CEO - Tobri",
      avatar: "https://via.placeholder.com/50",
    },
    {
      quote: "Nebula's development has increased our productivity by 54%.",
      para: "Nebula's chatbot is an absolute game-changer for our customer service!",
      name: "John Fisher",
      title: "CEO - TBB Real Estate",
      avatar: "https://via.placeholder.com/50",
    },
    {
      quote: "Nebula's development has increased our productivity by 54%.",
      para: "Nebula's chatbot is an absolute game-changer for our customer service!",
      name: "John Fisher",
      title: "CEO - TBB Real Estate",
      avatar: "https://via.placeholder.com/50",
    },
    {
      quote: "Nebula's development has increased our productivity by 54%.",
      para: "Nebula's chatbot is an absolute game-changer for our customer service!",
      name: "John Fisher",
      title: "CEO - TBB Real Estate",
      avatar: "https://via.placeholder.com/50",
    },
  ];

  return (
    <div className="w-full h-full bg-[#01111f] text-white py-14 px-8 text-center flex flex-col items-center justify-center">
      <h2
        className="text-4xl text-left w-full mb-10"
        data-aos="fade-right"
      >
        What our <span className="text-[#0E62A6]">clients</span> say
      </h2>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={1}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true
         }}
        navigation={true}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        className="w-full h-full justify-center py-10 mx-auto overflow-hidden"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(19,19,19,0.1)] border border-gray-500 rounded-lg p-10 max-w-[400px] mx-auto text-left shadow-md transition-transform">
              <p className="text-lg italic text-white sm:text-xl">{testimonial.quote}</p>
              <p className="text-md text-gray-400 mt-3 font-sans sm:text-sm">
                {testimonial.para}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <img
                  className="w-12 h-12 rounded-full border-2 border-[#0E62A6]"
                  src={testimonial.avatar}
                  alt={testimonial.name}
                />
                <div>
                  <span className="font-bold text-base">{testimonial.name}</span>
                  <br />
                  <small className="text-gray-400 text-sm">{testimonial.title}</small>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
