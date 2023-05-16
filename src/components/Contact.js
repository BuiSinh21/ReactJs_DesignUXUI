import React from "react";
// motion
import { motion } from "framer-motion";
// animation
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="lg:section py-16" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          {/* text */}
          <div>
            <div>
              <h4 className="text-x1 text-accent uppercase font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-2">
                Let's work <br />
                together!
              </h2>
            </div>
          </div>

          {/* form */}
          <form className="flex-1 w-[460px] border rounded-2xl flex flex-col gap-y-6 ">
            <input
              type="text"
              className="bg-transparent outline-none border-b py-2  w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Your name"
            />
            <input
              type="text"
              className="bg-transparent outline-none w-full border-b py-2 placeholder:text-white focus:border-accent transition-all"
              placeholder="Your email"
            />

            <textarea
              className="bg-transparent border-b py-12  outline-none w-full placeholder:text-white  focus:border-accent transition-all"
              placeholder="Your message"
            ></textarea>
            <button className="btn btn-lg">Send message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
