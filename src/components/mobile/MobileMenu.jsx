import React, { useState } from "react";
import hamburgerIcon from "../../assets/svg/UI/hamburger-icon.svg";
import home from "../../assets/svg/UI/home.svg";
import aboutMe from "../../assets/svg/UI/about-me.svg";
import projects from "../../assets/svg/UI/projects.svg";
import contact from "../../assets/svg/UI/contact.svg";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function MobileMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <motion.button
        initial={{ x: "100vw" }}
        animate={{ x: 0, transition: { type: "tween", duration: 0.8 } }}
        className="flex flex-row items-center"
        onClick={() => {
          setOpenMenu((prevState) => !prevState);
        }}
      >
        <img
          className="w-10 hover:bg-neutral rounded-md p-1 ease-linear duration-100"
          src={hamburgerIcon}
          alt="Mobile Menu Icon"
        />
      </motion.button>
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ y: "-20vh" }}
            animate={{
              opacity: [0, 0, 0, 0, 1],
              y: 0,
            }}
            exit={{
              opacity: [1, 0, 0, 0, 0],
              y: "-20vh",
            }}
            transition={{ duration: 0.2 }}
            className="absolute  bg-accent bg-opacity-60 flex flex-col items-left justify-center text-primary py-1 gap-y-1 rounded-md"
          >
            <NavLink to="/">
              <img
                className="w-10 hover:bg-neutral rounded-md p-1 ease-linear duration-100"
                src={home}
              />
            </NavLink>
            <NavLink to="/about">
              <img
                className="w-10 hover:bg-neutral rounded-md p-1 ease-linear duration-100"
                src={aboutMe}
              />
            </NavLink>
            <NavLink to="/projects">
              <img
                className="w-10 hover:bg-neutral rounded-md p-1 ease-linear duration-100"
                src={projects}
              />
            </NavLink>
            <NavLink to="/contact">
              <img
                className="w-10 hover:bg-neutral rounded-md p-1 ease-linear duration-100"
                src={contact}
              />
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileMenu;
