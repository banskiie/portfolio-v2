import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import IconHamburgerMenu from "../../assets/svg/UI/IconHamburgerMenu";
import IconHome from "../../assets/svg/UI/IconHome";
import IconProfile from "../../assets/svg/UI/IconProfile";
import IconJournal from "../../assets/svg/UI/IconJournal";
import IconMirror from "../../assets/svg/UI/IconMirror";
import { Tooltip as ReactTooltip } from "react-tooltip";

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
        <IconHamburgerMenu />
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
            <NavLink
              to="/"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Home"
            >
              <ReactTooltip id="my-tooltip" />
              <IconHome />
            </NavLink>
            <NavLink
              to="/profile"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Profile"
            >
              <ReactTooltip id="my-tooltip" />
              <IconProfile />
            </NavLink>
            <NavLink
              to="/journal"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Journal"
            >
              <ReactTooltip id="my-tooltip" />
              <IconJournal />
            </NavLink>
            <NavLink
              to="/reflection"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Reflection"
            >
              <ReactTooltip id="my-tooltip" />
              <IconMirror />
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileMenu;
