import React from 'react';
import './Image.css';

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { Spinner } from 'grommet';
import { FaRegHeart } from 'react-icons/fa';

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
};

const Image = (props) => {
  // console.log(props);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  const [loaded, setLoaded] = React.useState(false);

  return (
    <section>
      <div class='img_container' ref={ref}>
        {
          loaded ? null : (
            <div style={{ display: 'flex', justifyContent: 'center'}}>
              <Spinner size='large' color={'whitesmoke'} />
            </div>
          )
        }
        <img className='img-main' src={`/${props.id.image_id}.jpg`} alt="Iceland Photograph" style={loaded ? {} : { display: 'none' }} onLoad={() => setLoaded(!loaded)} />
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