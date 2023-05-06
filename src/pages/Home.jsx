import React from "react";
import mainImage from "../assets/img/pfpimg.jpg";
import { motion } from "framer-motion";
import js from "../assets/svg/tech-icons/js.svg";
import reactjs from "../assets/svg/tech-icons/reactjs.svg";
import firebase from "../assets/svg/tech-icons/firebase.svg";
import python from "../assets/svg/tech-icons/python.svg";
import php from "../assets/svg/tech-icons/php.svg";
import html from "../assets/svg/tech-icons/html.svg";
import css from "../assets/svg/tech-icons/css.svg";
import mysql from "../assets/svg/tech-icons/mysql.svg";

const iconsVariant = {
  initial: { opacity: 0, y: "-5vh" },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 1.4,
      staggerChildren: 0.25,
    },
  },
};

function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <section className="flex flex-col items-center justify-center">
        <div className="py-6 md:py-12">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.4, duration: 1 } }}
            className="h-80 w-80 md:h-[30rem] md:w-[30rem] object-cover rounded-full"
            src={mainImage}
            alt="A picture of me, Shand Ivan."
          />
        </div>
        <div>
          <motion.p
            initial={{ y: "-20vh" }}
            animate={{
              opacity: [0, 0, 0, 0, 1],
              y: 0,
              transition: { duration: 1, type: "tween" },
            }}
            className="text-primary text-center font-bold text-xl md:text-4xl"
          >
            Hi! I'm Shand Ivan Sinohon!
          </motion.p>
          <motion.div
            variants={iconsVariant}
            initial="initial"
            animate="animate"
            className="flex flex-row items-center h-12 justify-center gap-x-2 md:gap-x-4 md:my-4"
          >
            <motion.div variants={iconsVariant}>
              <img className="h-8 md:h-14" src={js} alt="Javascript" />
            </motion.div>
            <motion.div variants={iconsVariant}>
              <img className="h-6 md:h-10" src={reactjs} alt="ReactJS" />
            </motion.div>
            <motion.div variants={iconsVariant}>
              <img className="h-6 md:h-10" src={firebase} alt="Firebase" />
            </motion.div>
            <motion.div variants={iconsVariant}>
              <img className="h-5 md:h-8" src={python} alt="Python" />
            </motion.div>
            <motion.div variants={iconsVariant}>
              <img className="h-6 md:h-14" src={php} alt="PHP" />
            </motion.div>
            <motion.div variants={iconsVariant}>
              <img className="h-5 md:h-8" src={html} alt="HTML" />
            </motion.div>
            <motion.div variants={iconsVariant}>
              <img className="h-5 md:h-8" src={css} alt="CSS" />
            </motion.div>
            <motion.div variants={iconsVariant}>
              <img className="h-5 md:h-8" src={mysql} alt="MySQL" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
