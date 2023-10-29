import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import { RxReader, RxArrowTopRight, RxCode } from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxCode />,
    title: "Development",
    description:
      "Crafting responsive, user-friendly websites tailored to your unique vision.",
  },
  {
    icon: <RxReader />,
    title: "Database",
    description:
      "Expertly handling data, from design to integration, ensuring efficiency..",
  },
  {
    icon: <HiServer />,
    title: "DevOps",
    description:
      "Streamlining development and deployment pipelines for efficiency",
  },
  {
    icon: <HiCloud />,
    title: "Cloud Solutions",
    description:
      "Leveraging cloud services for scalable and cost-effective applications.",
  },
  {
    icon: <HiLightBulb />,
    title: "Consulting",
    description:
      "Providing expert guidance and insights to elevate your software projects.",
  },
];

// import required modules
import { FreeMode, Pagination } from "swiper";
import { HiCloud, HiLightBulb, HiServer } from "react-icons/hi2";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
