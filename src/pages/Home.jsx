import React from "react";
import mainImage from "../assets/img/pfpimg.jpg";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <section>
        <div className="py-6 md:py-12">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.4, duration: 1 } }}
            className="h-72 w-72 md:h-96 md:w-96 object-cover rounded-full"
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
            className="text-primary"
          >
            Hi! I'm Shand Ivan P. Sinohon.
          </motion.p>
        </div>
      </section>
    </div>
  );
}

export default Home;
