import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Intro to Variants
const variants = {
  open: { opacity: 1, height: "auto" },
  closed: { opacity: 0, height: 0 },
};

const Accordion = () => {
  const [isToggle, setIsToggled] = useState(false);
  return (
    <article>
      <h2 role="button" onClick={() => setIsToggled((prevState) => !prevState)}>
        The Heading
      </h2>
      <AnimatePresence>
        {isToggle && (
          /*  <motion.div
            style={{ overflow: "hidden", backfaceVisibility: "hidden" }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          > */

          //with variants
          <motion.div variants={variants} style={{ overflow: "hidden", backfaceVisibility: "hidden" }} initial="closed" animate="open" exit="closed">
            <p>
              loremf egfdjgnrf esrjfbehrjs frnes gfesrhre gsh rehdsg t4rhe hrse dhfre dfwf rf re gr r e r re r rrrrrrrrrrrrrrrr rr rrrrrrrrrrrr
              rrrrrrr{" "}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default Accordion;
