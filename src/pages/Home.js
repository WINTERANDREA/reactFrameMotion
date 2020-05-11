import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Card, CardGrid, Container, Header } from "../Elements";
import Modal from "../Modal";
import "../App.css";

import blue from "../blue.png";
import purp from "../purp.png";
import black from "../black.png";
import green from "../green.png";
import Accordion from "../Accordion";

export const Home = () => {
  const [value, setValue] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCardActive, setIsCardActive] = useState(true);
  const [isToggle, setToggle] = useState(0);
  const location = useLocation();

  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1>HOME</h1>
      <AnimatePresence>
        {!isToggle && (
          <motion.h2 initial={{ opacity: 0 }} animate={{ x: value + "px", opacity: 1 }} exit={{ opacity: 0 }}>
            Super Cool
          </motion.h2>
        )}
      </AnimatePresence>

      <button style={{ padding: 30, display: "block" }} onClick={() => setToggle((prevState) => (prevState ? 0 : 1))}>
        Toggle
      </button>
      <input style={{ display: "block" }} type="range" min="-100" max="100" value={value} onChange={(e) => setValue(e.target.value)} />

      <Modal isToggle={isToggle} setToggle={setToggle}>
        <Card style={{ background: "var(--purp)" }}>
          <h3>Some card</h3>
          <img src={purp} />
        </Card>
      </Modal>
      <Accordion />
      <CardGrid>
        <Card
          whileHover={{ scale: [1.02, 0.7, 1.2] }}
          whileTap={{ background: "yellow" }}
          onHoverEnd={() => console.log("hover end")}
          style={{ background: "var(--purp)" }}
        >
          <h3>Some card</h3>
          <img src={purp} />
        </Card>
        <AnimatePresence>
          {isCardActive && (
            <motion.div
              exit={{ height: 0, opacity: 0 }}
              transition={{
                opacity: {
                  duration: 0,
                },
              }}
            >
              <Card
                onDragEnd={(event, info) => {
                  if (Math.abs(info.point.x) > 200) {
                    setIsCardActive(false);
                  }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                style={{ x, opacity, background: "var(--blue)" }}
              >
                <h3>Some card</h3>
                <img src={blue} />
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
        <Card style={{ background: "var(--black)" }}>
          <h3>Some card</h3>
          <img src={black} />
        </Card>
        <Card style={{ background: "var(--green)" }}>
          <h3>Some card</h3>
          <img src={green} />
        </Card>
      </CardGrid>
    </motion.div>
  );
};
