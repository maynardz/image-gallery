import React from 'react';

import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

import Image from './Image/Image';

const Splash = props => {
  console.log(props);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (JSON.stringify(props.images) === '{}') {
    return (
      <div>
        <h4 onClick={() => window.location.reload()} style={{display: 'flex', justifyContent: 'center', color: 'whitesmoke'}}>Refresh</h4>
      </div>
    )
  } else {
    return (
      <div>
        <>
          {
            props.images.images.map((image, index) => (
              <Image key={index} id={image} updateLocalStorage={props.updateLocalStorage} />
            ))
          }
          <motion.div className="progress" style={{ scaleX }} />
        </>
      </div>
    )
  }
}

export default Splash;