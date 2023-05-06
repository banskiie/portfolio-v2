import React from "react";
import mainImage from "../assets/img/pfpimg.jpg";
import { motion } from "framer-motion";

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
              transition: { delay: 1, duration: 1.5, type: "tween" },
            }}
            className="text-primary text-center text-lg md:text-3xl"
          >
            Hi! I'm Shand Ivan P. Sinohon.
          </motion.p>
        </div>
      </section>
    </div>
  );
}

export default Home;
