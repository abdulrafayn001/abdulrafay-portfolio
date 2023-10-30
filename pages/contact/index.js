import { BsArrowRight } from "react-icons/bs";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xrgwjweq");

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {state.succeeded ? (
          // Show a success message
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Thanks for <span className="text-accent">connecting.</span>
          </motion.h2>
        ) : (
          <>
            {/* text & from */}
            <div className="flex flex-col w-full max-w-[700px]">
              {/* text */}
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 text-center mb-12 hidden xl:flex md:fle"
              >
                Let&apos;s <span className="text-accent">connect.</span>
              </motion.h2>

              <motion.form
                onSubmit={handleSubmit}
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex-1 flex flex-col gap-6 w-full mx-auto mt-10 xl:mt-0 md:mt-0"
              >
                <div className="flex gap-x-6 w-full">
                  <input type="text" className="input" placeholder="name" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input-email"
                    placeholder="email"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="absolute text-red-500 mt-2"
                  />
                </div>
                <input type="text" className="input" placeholder="subject" />

                <textarea
                  placeholder="message"
                  className="textarea"
                  id="message"
                  name="message"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="absolute text-red-500 mt-2"
                />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
                >
                  <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                    Let&apos;s talk
                  </span>
                  <BsArrowRight className="translate-y-[120%] opacity-0 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                </button>
              </motion.form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;
