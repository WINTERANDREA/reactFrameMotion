import React from "react";
import { Square } from "../Square";
import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
};

const hVariants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0, transition: { delay: 1 } },
  exit: { opacity: 0, y: 100, transition: { delay: 0.2 } },
};

export const SquarePage = () => {
  return (
    <motion.div variants={variants} initial="initial" animate="animate" exit="exit">
      <motion.h2 variants={hVariants} initial="initial" animate="animate" exit="exit">
        Super Square Shuffle
      </motion.h2>
      <Square />
    </motion.div>
  );
};
