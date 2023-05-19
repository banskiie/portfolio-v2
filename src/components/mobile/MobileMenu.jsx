import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import IconMenu from "../../assets/svg/IconMenu";
import IconBxsHome from "../../assets/svg/IconBxsHome";
import IconUser from "../../assets/svg/IconUser";
import IconBookOpen from "../../assets/svg/IconBookOpen";
import IconPencil from "../../assets/svg/IconPencil";

function MobileMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="flex flex-row-reverse">
      <motion.button
        initial={{ x: "100vw" }}
        animate={{ x: 0, transition: { type: "tween", duration: 0.8 } }}
        onClick={() => {
          setOpenMenu((prevState) => !prevState);
        }}
      >
        <IconMenu className="fill-white" />
      </motion.button>
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ x: "20vw" }}
            animate={{
              opacity: [0, 0, 0, 0, 1],
              x: 0,
            }}
            exit={{
              opacity: [1, 0, 0, 0, 0],
              x: "20vw",
            }}
            transition={{ duration: 0.2 }}
            className=" bg-primary flex flex-row items-center justify-center rounded-md text-white gap-x-2 px-2"
          >
            <NavLink to="/">
              <IconBxsHome />
            </NavLink>
            <NavLink to="/profile">
              <IconUser />
            </NavLink>
            <NavLink to="/journal">
              <IconBookOpen />
            </NavLink>
            <NavLink to="/reflection">
              <IconPencil />
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileMenu;
