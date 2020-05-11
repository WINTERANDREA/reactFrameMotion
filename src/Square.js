import React, { useState } from "react";
import { motion } from "framer-motion";
import { shuffle } from "lodash";

const COLORS = ["var(--red)", "var(--blue)", "var(--black)", "var(--purp)", "var(--green)"];

export const Square = () => {
  const [colorsList, setColorsList] = useState(COLORS);
  return (
    <div>
      <button onClick={() => setColorsList(shuffle(colorsList))}>Shuffle</button>
      {colorsList.map((color) => (
        <motion.div
          key={color}
          positionTransition={{ type: "spring", damping: 200, stifness: 10 }}
          style={{ background: color, height: 100, width: 200 }}
        />
      ))}
    </div>
  );
};
