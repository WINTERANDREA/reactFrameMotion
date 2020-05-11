import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";

const COLORS = ["var(--red)", "var(--blue)", "var(--black)", "var(--purp)", "var(--green)"];

const variants = {
  initial: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),

  animate: { x: 0, opacity: 1 },
  exit: (direction) => ({
    x: direction > 0 ? -1000 : 1000,
    opacity: 0,
  }),
};

export const Slideshow = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (direction) => {
    setPage([page + direction, direction]);
  };

  const index = wrap(0, COLORS.length, page);

  return (
    <div style={{ position: "relative", height: 400 }}>
      <AnimatePresence custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            if (offset.x > 400) {
              paginate(-1);
            } else if (offset.x < -400) {
              paginate(1);
            }
          }}
          style={{
            background: COLORS[index],
            height: 400,

            width: "100%",
            top: 0,
            left: 0,
            position: "absolute",
          }}
        />
      </AnimatePresence>
      <div style={{ position: "absolute", top: 0, left: 0 }}>
        <button onClick={() => paginate(-1)}>{"<"}</button>
        <button onClick={() => paginate(1)}>{">"}</button>
      </div>
    </div>
  );
};
