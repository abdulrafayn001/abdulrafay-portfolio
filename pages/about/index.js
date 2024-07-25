import Link from "next/link";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJira,
  FaAws,
  FaTrello,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiRuby,
  SiAzuredevops,
  SiAwslambda,
  SiAwsamplify,
  SiCircleci,
  SiGithubactions,
  SiGitlab,
  SiHeroku,
} from "react-icons/si";

import Circles from "../../components/Circles";
import Avatar from "../../components/Avatar";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useState } from "react";
import CountUp from "react-countup";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key={0} />,
          <FaCss3 key={1} />,
          <FaJs key={2} />,
          <FaReact key={3} />,
          <SiNextdotjs key={4} />,
          <SiFramer key={5} />,
          <FaNodeJs key={6} />,
          <SiRuby key={7} />,
        ],
      },
      {
        title: "Cloud Computing",
        icons: [
          <FaAws key={7} />,
          <SiAzuredevops key={8} />,
          <SiHeroku key={9} />,
          <SiAwslambda key={10} />,
          <SiAwsamplify key={11} />,
        ],
      },
      {
        title: "Tools",
        icons: [
          <FaGithub key={9} />,
          <SiGitlab key={10} />,
          <SiCircleci key={11} />,
          <SiGithubactions key={12} />,
          <FaJira key={13} />,
          <FaTrello key={14} />,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Software Engineer - Devsinc",
        stage: "2022 - now",
      },
      {
        title: "Full Stack Developer - Sparky Studios",
        stage: "2021 - 2022",
      },
      {
        title: "Intern - GeekyBugs",
        stage: "2021",
      },
    ],
  },
  {
    title: "certifications",
    info: [
      {
        title: "Computer Science - University of Central Punjab, Pakistan",
        stage: "2022",
      },
      {
        title: "GitLab Certified Associate",
        link: "https://badgr.com/public/assertions/cbt9tm7US06Y9a5LdpV3jQ?identity__email=abdulrafayn001@gmail.com",
      },
      {
        title: "Microsoft Certified: Azure Fundamentals",
        link: "https://www.credly.com/badges/58307634-94c7-4955-9550-55cd32433cbe?source=linked_in_profile",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar image */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute -bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto mt-8 xl:mt-0 md:mt-0 h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Elevating
            <span className="text-accent"> ideas </span>through elegant code.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 hidden md:flex md:max-w-xl xl:max-w-none"
          >
            Over two years ago, I ventured into the world of full-stack software
            engineering, with experiences ranging from pivotal contributions to
            CRM projects and startups. Today, I continue to expand and explore
            exciting collaborations with fellow professionals.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent m-2 ">
                  <CountUp start={0} end={2} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent m-2 ">
                  <CountUp start={0} end={10} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {item.link ? (
                    <Link
                      href={item.link}
                      target="_blank"
                      className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60 hover:text-accent"
                    >
                      <div className="font-light mb-2 md:mb-0">
                        {item.title}
                      </div>
                      {item.stage && <div className="hidden md:flex">-</div>}
                      <div>{item.stage}</div>
                      <div className="flex gap-x-4">
                        {item.icons?.map((icon, iconIndex) => {
                          return (
                            <div
                              key={iconIndex}
                              className="text-2xl text-white"
                            >
                              {icon}
                            </div>
                          );
                        })}
                      </div>
                    </Link>
                  ) : (
                    <>
                      <div className="font-light mb-2 md:mb-0">
                        {item.title}
                      </div>
                      {item.stage && <div className="hidden md:flex">-</div>}
                      <div>{item.stage}</div>
                      <div className="flex gap-x-4">
                        {item.icons?.map((icon, iconIndex) => {
                          return (
                            <div
                              key={iconIndex}
                              className="text-2xl text-white"
                            >
                              {icon}
                            </div>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
