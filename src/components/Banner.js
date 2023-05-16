import React from "react";
//image
import Image from "../assets/avatar.svg";
// icons
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
// Type animation
import { TypeAnimation } from "react-type-animation";
// motion

import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[75vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row  lg:items-center">
          <div className="flex-1 text-center font-secondary lg:text-left">
            {/* text */}
            <div>
              <motion.h1
                // Xét kiểu khi xuất hiện
                variants={fadeIn("up", 0.3)}
                // Thời điểm bắt đầu ẩn
                initial="hidden"
                // Khi chạy sẽ show ra
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className=" text-[55px] font-bold leading-[0.8] lg:text-[110px] "
              >
                {" "}
                BEN <span> AIDEN</span>
              </motion.h1>

              <motion.div
                variants={fadeIn("up", 0.4)}
                // Thời điểm bắt đầu ẩn
                initial="hidden"
                // Khi chạy sẽ show ra
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold  leading-[1]"
              >
                <span className="mr-4">I am a </span>
                {/* Animation */}

                <TypeAnimation
                  // Liệt kê số phần tử và xét thời gian chạy
                  sequence={[
                    "Developer",
                    2000,
                    "Designer",
                    2000,
                    "Youtuber",
                    2000,
                  ]}
                  // Tốc độ chạy
                  speed={50}
                  // màu chữ cho wrapper
                  className="text-accent"
                  // Thẻ này khi sinh ra sẽ bọc vào sequence hiển thị ra màn hình
                  wrapper="span"
                  // Lặp vô hạn
                  repeat={Infinity}
                ></TypeAnimation>
              </motion.div>

              <motion.p
                variants={fadeIn("up", 0.5)}
                // Thời điểm bắt đầu ẩn
                initial="hidden"
                // Khi chạy sẽ show ra
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="max-w-max mx-auto lg:mx-0"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </motion.p>

              <motion.div
                variants={fadeIn("up", 0.6)}
                // Thời điểm bắt đầu ẩn
                initial="hidden"
                // Khi chạy sẽ show ra
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex gap-x-6 max-w-max items-center my-12 mx-auto lg:mx-0"
              >
                <button className="btn btn-lg">Contact Me</button>
                <a href="#" className="text-gradient btn-link">
                  My Portfolio
                </a>
              </motion.div>
              {/* socials */}
              <motion.div
                variants={fadeIn("up", 0.7)}
                // Thời điểm bắt đầu ẩn
                initial="hidden"
                // Khi chạy sẽ show ra
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex gap-x-6 max-w-max mx-auto lg:mx-0 text-[25px]
             lg:text-[28px]"
              >
                <a href="#">
                  <FaYoutube />
                </a>
                <a href="#">
                  <FaGithub />
                </a>
                <a href="#">
                  <FaDribbble />
                </a>
              </motion.div>
            </div>
            {/* image */}
          </div>
          <motion.div
            variants={fadeIn("left", 0.6)}
            // Thời điểm bắt đầu ẩn
            initial="hidden"
            // Khi chạy sẽ show ra
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="pl-28 hidden lg:flex flex-1 max-w-[320px] lg:max-w-[420px]"
          >
            <img src={Image} alt="avatar" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
