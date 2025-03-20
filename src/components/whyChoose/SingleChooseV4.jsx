import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

const SingleChooseV4 = ({ choose }) => {
  const {
    listTitle,
    listText,
    listLink,
    listIcon,
    listAnimation,
    animationDelay,
  } = choose;

  const getAnimationProps = () => {
    switch (listAnimation) {
      case "fadeInUp":
        return { y: 20 };
      case "fadeInDown":
        return { y: -20 };
      case "fadeInLeft":
        return { x: -20 };
      case "fadeInRight":
        return { x: 20 };
      default:
        return { y: 20 };
    }
  };

  const animationProps = getAnimationProps();

  return (
    <>
      <motion.li
        initial={{ opacity: 0, ...animationProps }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: parseFloat(animationDelay) / 1000 }}
      >
        <div className="info">
          <Link to={`/${listLink}#`}>{listTitle}</Link>
          <p>{listText}</p>
        </div>
        <div className="link">
          <Link to={`/${listLink}#`}>
            <i className={listIcon}></i>
          </Link>
        </div>
      </motion.li>
    </>
  );
};

export default SingleChooseV4;
