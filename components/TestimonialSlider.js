import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import Link from "next/link";

// testimonial data
const testimonialData = [
  {
    image: "/t-avt-1.avif",
    name: "Hashim Bin Aqib",
    position: "CEO Sparky Studios",
    alt: "Hashim Bin Aqib, CEO of Sparky Studios, providing a testimonial about Abdul Rafay's leadership and expertise in React and NestJS",
    link: "https://www.linkedin.com/in/hashim-bin-aqib-6b43351aa/",
    message:
      "Abdul Rafay's time in Sparky Studios was nothing short of amazing. He acted as a team lead for a project in which there were 5 people in total. He ensured timely delivery and quality. His knowledge and experience in React and Nestjs are of top quality. In the end, the project was then deployed using AWS which he handled himself! To anyone looking for a developer, he is your guy!",
  },
  {
    image: "/t-avt-2.avif",
    name: "Adil Shahzad",
    position: "Senior DevOps Engineer",
    link: "https://www.linkedin.com/in/adilshehzad7/",
    alt: "Adil Shahzad, Senior DevOps Engineer, providing a testimonial about Abdul Rafay's expertise in AWS, Full Stack Development, and ReactJS.",
    message:
      "Abdul Rafay is one of the best People I met, and his way of learning, approaching problems is extraordinary. Abdul Rafay has expertise with Amazon Web Services & Full Stack Development and especially ReactJS. Abdul Rafay would be a true asset for any positions requiring Cloud Computing and Full Stak Development skills and comes with my heartfelt recommendation.",
  },
  {
    image: "/t-avt-3.avif",
    name: "Muhammad Sohaib",
    position: "Senior Backend Engineer",
    alt: "Muhammad Sohaib, Senior Backend Engineer, providing a testimonial about Abdul Rafay's full stack training in Ruby on Rails, unit testing, and ReactJS",
    message: `I have been in charge of Rafay's full stack training that included Ruby on Rails, unit testing as well as ReactJS. He's hard working, responsible, a fast learner, self motivated and a reliable professional. Training him has been enjoyable as he absorbed what I taught him very quickly.
      Best wishes re your professional career! I'm sure you'll achieve lots!`,
  },
  {
    image: "/t-avt-4.avif",
    name: "Muhammad Saim",
    alt: "Muhammad Saim, Senior Software Engineer, providing a testimonial about Abdul Rafay's contributions to Rails and MERN stack projects, including extensive customization of TinyMCE and his collaborative team player qualities.",
    position: "Senior Software Engineer",
    link: "https://www.linkedin.com/in/saimbutt/",

    message: (
      <>
        <div>
          I had the pleasure of working closely with Abdul Rafay on both Rails
          and MERN stack projects, where his technical prowess and dedication to
          excellence were consistently on display. One of the standout
          contributions he made was his extensive customization of TinyMCE,
          transforming it to meet our specific project needs. He demonstrated a
          deep understanding of both back-end and front-end development,
          skillfully navigating through the complexities.
        </div>
        <br />
        <div>
          Beyond his technical skills, He is a collaborative team player. He
          communicates effectively, shares knowledge generously, and always
          remains open to feedback. His proactive approach and positive attitude
          made him an invaluable member of our team.
        </div>
        <br />
        <div>
          I highly recommend him for any development role. His expertise,
          combined with his dedication and team spirit, ensures that he will be
          a significant asset to any organization.
        </div>
      </>
    ),
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* avatar name position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* avatar */}
                  <div className="mb-2 mx-auto">
                    {person.link ? (
                      <Link href={person.link} target="_blank">
                        <Image
                          src={person.image}
                          alt={person.alt}
                          width={100}
                          height={100}
                          loading="eager"
                        />
                      </Link>
                    ) : (
                      <Image
                        src={person.image}
                        alt={person.alt}
                        width={100}
                        height={100}
                        loading="eager"
                      />
                    )}
                  </div>
                  {/* name */}
                  <div
                    className={`text-lg ${person.link && "hover:text-accent"}`}
                  >
                    {person.link ? (
                      <Link href={person.link} target="_blank">
                        {person.name}
                      </Link>
                    ) : (
                      <>{person.name}</>
                    )}
                  </div>
                  {/* position */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote */}
              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                {/* quote icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* message */}
                <div className="xl:text-lg text-center md:text-left overflow-y-auto max-h-[200px]">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
