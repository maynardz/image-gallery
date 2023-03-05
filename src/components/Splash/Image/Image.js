import React from 'react';
import './Image.css';

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

// import { Favorite } from 'grommet-icons';
import { FaRegHeart } from 'react-icons/fa';

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
};

const Image = (props) => {
  // console.log(props);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
        <img className='img-main' src={`/${props.id.image_id}.jpg`} alt="Iceland Photograph" />
      </div>
      <motion.h2 style={{ y }} whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
        <FaRegHeart className='favIcon' onClick={() => {
          props.updateLocalStorage(props.id);
        }} style={props.id.favorited ? { color: 'red' } : { color: 'whitesmoke' }} />
      </motion.h2>
    </section>
  )
}

export default Image;