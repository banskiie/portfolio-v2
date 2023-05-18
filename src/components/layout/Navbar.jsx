import React, { useContext } from "react";
import devlogo from "../../assets/svg/devlogo.svg";
import { NavLink } from "react-router-dom";
import { MobileContext } from "../../context/mobile-context";
import MobileMenu from "../mobile/MobileMenu";
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
      className="flex flex-row text-primary font-bold gap-x-8 text-xl"
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
          Profile
        </NavLink>
      </motion.div>
      <motion.div variants={menuListVariant}>
        <NavLink
          className="hover:text-secondary p-1 rounded-md ease-linear duration-100 cursor-pointer"
          to="/projects"
        >
          Journal
        </NavLink>
      </motion.div>
      <motion.div variants={menuListVariant}>
        <NavLink
          className="hover:text-secondary p-1 rounded-md ease-linear duration-100 cursor-pointer"
          to="/contact"
        >
          Reflection
        </NavLink>
      </motion.div>
    </motion.div>
  );
}

function Navbar() {
  const mobileCtx = useContext(MobileContext);

  const menu = mobileCtx.isInMobile ? <MobileMenu /> : <FullMenu />;

  return (
    <motion.div className="sticky flex flex-row items-center justify-between px-8 lg:px-32 py-4 ease-in-out duration-100">
      <NavLink to="/" className="flex flex-row items-center">
        <motion.img
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { type: "tween", duration: 0.8 },
          }}
          className="h-8"
          src={devlogo}
          alt="A coding logo"
        />
        {mobileCtx.isInMobile ? null : (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0.4, 1], transition: { delay: 1 } }}
            className="text-primary text-2xl px-2 font-bold"
          >
            Shand.dev
          </motion.span>
        )}
      </NavLink>
      {menu}
    </motion.div>
  );
}

export default Navbar;
