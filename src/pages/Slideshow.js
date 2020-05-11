import React from "react";
import { Slideshow } from "../Slideshow";
import { motion } from "framer-motion";

export const SlideshowPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1>SLIDESHOW</h1>
      <Slideshow />
    </motion.div>
  );
};
