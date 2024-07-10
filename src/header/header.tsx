import React from "react";
import './header.css'
import {motion} from 'framer-motion'
import imagesSVG from '../img/ciclearrow.svg'

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };
  
  const drawCircle = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          color: "red",
          pathLength: { delay, type: "spring", duration: 4, bounce: 0 },
          opacity: { delay, duration: 0.1 },
        },
      };
    },
  };
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
export default function Header(){

  return (
    <div style={{zIndex: 0, position: 'sticky', top: 0}}         >
    <div className="header">
        <div className="header_left">
        <motion.svg
      width="90%"
      height="800"
      viewBox="-100 0 600 600"
      initial="hidden"
      animate="visible"
    >
      <motion.circle
        cx="220"
        cy="250"
        r="200"
        stroke="#680f38"
        className={'header_left_circle'}
        variants={drawCircle}
        custom={1}
      />

        <motion.circle
        cx="220"
        cy="250"
        r="140"
        stroke="#680f38"
        variants={drawCircle}
        className={'header_left_circle'}
        custom={2}
      />

      <motion.polygon
              points="200 390,240 360,240 410"
      stroke="#680f38"
      variants={drawCircle}
      custom={2}
      />

<motion.polygon
              points="83 220,55 260,110 260"
      stroke="black"
      variants={drawCircle}
      custom={3}
      />

      <motion.polygon
              points="200 90,240 110,200 130"
      stroke="black"
      variants={drawCircle}
      custom={4}
      />

<motion.polygon
              points="388 220,359 260,330 220"
      stroke="black"
      variants={drawCircle}
      custom={5}
      />

    </motion.svg>
        </div>
        <div className="header_middle">
        <motion.svg
      width="100%"
      height="800"
      viewBox="0 0 600 600"
      initial="hidden"
      animate="visible"
    >

    <motion.line
    className='linevs'
        x1="120"
        y1="20"
        x2="480"
        y2="20"
        stroke="#000000"
        variants={draw}
        custom={1}
      />
          <motion.line
    className='linevs'
        x1="500"
        y1="-405"
        x2="400"
        y2="20"
        stroke="#000000"
        variants={draw}
        custom={1}
      />
          <motion.line
    className='linevs'
        x1="452"
        y1="-405"

                x2="340"
        y2="20"
        stroke="#000000"
        variants={draw}
        custom={1}
      />

      <motion.line
    className='linevs'
        x1="120"
        y1="530"
        x2="480"
        y2="530"
        stroke="#000000"
        variants={draw}
        custom={1}
      />
<motion.line
    className='linevs'
        x1="217"
        y1="530"
        x2="100"
        y2="1000"
        stroke="#000000"
        variants={draw}
        custom={1}
      />
      
<motion.line
    className='linevs'
    x1="277"
    y1="530"
    x2="160"
    y2="1000"
        stroke="#000000"
        variants={draw}
        custom={1}
      />



    </motion.svg>
        </div>
<div className="header_right">
<motion.svg
      width="90%"
      height="800"
      viewBox="-100 0 600 600"
      initial="hidden"
      animate="visible"
    >
      <motion.circle
        cx="220"
        cy="250"
        r="200"
        stroke="#680f38"
        variants={drawCircle}
        custom={1}
        className={"header_right_circle"}
      />
      <motion.line
        x1="120"
        y1="170"
        x2="180"
        y2="170"
        stroke="#acb9d4"
        variants={draw}
        custom={1}
      />
      <motion.line
        x1="180"
        y1="170"
        x2="180"
        y2="230"
        stroke="#acb9d4"
        variants={draw}
        custom={2}
      />
      <motion.line
        x1="180"
        y1="230"
        x2="240"
        y2="230"
        stroke="#acb9d4"
        variants={draw}
        custom={3}
      />
      <motion.line
        x1="240"
        y1="230"
        x2="240"
        y2="290"
        stroke="#acb9d4"
        variants={draw}
        custom={4}
      />
      <motion.line
        x1="240"
        y1="290"
        x2="300"
        y2="290"
        stroke="#acb9d4"
        variants={draw}
        custom={5}
      />
      <motion.line
        x1="300"
        y1="290"
        x2="300"
        y2="350"
        stroke="#acb9d4"
        variants={draw}
        custom={6}
      />
    </motion.svg>
</div>
    </div>

        <motion.h1
        className="header_h1"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 5}}

    >
        VS
        </motion.h1>
        <motion.h2
        className="header_h2_top"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 5}}
        >
            Agile

        </motion.h2>
        <motion.h2
        className="header_h2_bottom"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 5}}
        >
            Waterfall

        </motion.h2>
    </div>
  );
}
