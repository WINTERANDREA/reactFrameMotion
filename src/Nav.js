import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const variants = {
  open: { x: 0 },
  closed: { x: "-100%", transition: { delay: 0.5 } },
};

const ulVariants = {
  open: {
    scale: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
      staggerDirection: 1, // 1 forwards, -1 backwards
      when: "beforeChildren", // "afterChildren" "beforeChildren"
    },
  },
  closed: { scale: 0.95 },
};

const liVariants = {
  open: { y: 0, opacity: 1 },
  closed: { y: -30, opacity: 0 },
};

const links = [
  {
    title: "One",
    id: 1,
  },
  {
    title: "Two",
    id: 2,
  },
  {
    title: "Three",
    id: 3,
  },
  {
    title: "Four",
    id: 4,
  },
];

const Nav = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <MenuNav
      variants={variants}
      initial="closed"
      animate={isNavOpen ? "open" : "closed"}
      transition={{ x: { type: "spring", stiffness: 100, damping: 20 } }}
    >
      <button onClick={() => setIsNavOpen(false)}>Close</button>
      <motion.ul variants={ulVariants}>
        {links.map((link) => (
          <motion.li variants={liVariants} key={link.id}>
            <a href="#">{link.title}</a>
          </motion.li>
        ))}
      </motion.ul>
    </MenuNav>
  );
};

const MenuNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--black);
  padding: 40px;
  button {
    position: absolute;
    top: 10px;
    right: 150px;
    padding: 5px 10px;
  }
  ul {
    color: yellow;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    padding: 0;
    margin: 0 0 1rem;
    font-size: 2rem;
    a {
      color: white;
      text-decoration: none;
      border-bottom: 2px transparent solid;
      transition: 0.3s ease border;
      &:hover {
        border-bottom: 2px var(--blue) solid;
      }
    }
  }
`;

export default Nav;
