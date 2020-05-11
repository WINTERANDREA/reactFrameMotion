import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Card, CardGrid, Container, Header } from "./Elements";
import Modal from "./Modal";
import "./App.css";
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";
import Accordion from "./Accordion";
import Nav from "./Nav";
import { Home } from "./pages/Home";
import { SquarePage } from "./pages/Square";
import { SlideshowPage } from "./pages/Slideshow";

function App() {
  const [value, setValue] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCardActive, setIsCardActive] = useState(true);
  const [isToggle, setToggle] = useState(0);
  const location = useLocation();

  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);
  return (
    // Keyframes
    // <motion.div initial={{ y: 100, x: -400 }} animate={{ opacity: [0, 1, 0, 1], y: 0, x: 0 }} transition={{ duration: 5, times: [0, 0.2, 0.3, 1] }}>
    <motion.div initial={{ opacity: 0, y: 100, x: -400 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: 1 }}>
      <Header>
        <Menu onClick={() => setIsNavOpen(true)} />
        <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <h1>Header</h1>
        <Link to="/square">Square</Link>
        <Link to="/slideshow">Slideshow</Link>
        <Link to="/">Home</Link>
      </Header>
      <Container>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route exact path="/square" component={SquarePage} />
            <Route exact path="/slideshow" component={SlideshowPage} />
          </Switch>
        </AnimatePresence>
      </Container>
    </motion.div>
  );
}

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};
export default AppWrapper;
