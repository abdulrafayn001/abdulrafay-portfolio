// components
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container m-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 xl:hidden md:hidden"
            >
              Let&apos;s work together to bring your projects to life.
            </motion.p>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 hidden xl:flex"
            >
              Experienced full-stack software engineer with expertise in React,
              Node, Ruby on Rails, and Nestjs, along with certifications in
              Microsoft Azure and GitLab. I have hands-on experience deploying
              applications on cloud services like AWS. Let&apos;s collaborate on
              your projects to ensure not only robust development but also
              streamlined deployment and management.
            </motion.p>
          </div>
          {/* sidebar */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
