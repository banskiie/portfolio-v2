import React, { useContext } from "react";
import devlogo from "../../assets/svg/devlogo.svg";
import { NavLink } from "react-router-dom";
import { MobileContext } from "../../context/mobile-context";
import MobileMenu from "../mobile/mobileMenu";
import { motion } from "framer-motion";

const menuListVariant = {
  initial: { y: "-100vh" },
  animate: {
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0, 0.5, 0.2, 1],
      staggerChildren: 0.15,
    },
  },
};

function FullMenu() {
  return (
    <motion.div
      variants={menuListVariant}
      initial="initial"
      animate="animate"
      className="flex flex-row text-primary font-bold gap-x-8 text-2xl"
    >
      <motion.div variants={menuListVariant}>
        <NavLink
          className="hover:text-secondary p-1 rounded-md ease-linear duration-100 cursor-pointer"
          to="/"
        >
          Home
        </NavLink>
      </motion.div>
      <motion.div variants={menuListVariant}>
        <NavLink
          className="hover:text-secondary p-1 rounded-md ease-linear duration-100 cursor-pointer"
          to="/about"
        >
          About
        </NavLink>
      </motion.div>
      <motion.div variants={menuListVariant}>
        <NavLink
          className="hover:text-secondary p-1 rounded-md ease-linear duration-100 cursor-pointer"
          to="/projects"
        >
          Projects
        </NavLink>
      </motion.div>
      <motion.div variants={menuListVariant}>
        <NavLink
          className="hover:text-secondary p-1 rounded-md ease-linear duration-100 cursor-pointer"
          to="/contact"
        >
          Contact
        </NavLink>
      </motion.div>
    </motion.div>
  );
}

function Navbar() {
  const mobileCtx = useContext(MobileContext);

  const menu = mobileCtx.isInMobile ? <MobileMenu /> : <FullMenu />;

  return (
    <div className="sticky flex flex-row items-center justify-between mx-8 py-4">
      <NavLink to="/" className="flex flex-row items-center">
        <motion.img
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { type: "tween", duration: 0.8 },
          }}
          className="h-10"
          src={devlogo}
          alt="A coding logo"
        />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0.4, 1], transition: { delay: 1 } }}
          className="text-primary text-3xl px-2 font-bold invisible sm:visible"
        >
          Shand.dev
        </motion.span>
      </NavLink>
      {menu}
    </div>
  );
}

export default Navbar;
