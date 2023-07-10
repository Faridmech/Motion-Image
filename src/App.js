import { motion } from "framer-motion";
import "./App.css";
import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
function App({ slides }) {
  const [position, setPosition] = useState(0);
  const onRight = () => {
    if (position < slides.length - 1) {
      setPosition(position + 1);
    }
  };
  const onLeft = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };

  return (
    <div className="App">
      <div style={{
        position: "absolute",
        top: 30,
        left: 30
      }}>
           <button onClick={onLeft}>&lt;&lt;</button>
           <button onClick={onRight}>&gt;&gt;</button>
      </div>
      <div className="row">
        {slides.map((url, index) => (
          <motion.div
            className="container"
            key={index}
            initial={{
              scale: 0,
              motionRotation: -180,
            }}
            animate={{
              rotate: 0,
              scale: index === position ? 1 : 0.8,
              left: `${(index - position) * 60 - 30}vw`,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}>
              
                <img src={url}></img>
             
            
          </motion.div> 
        ))}
      </div>
    </div>
  );
}

export default App;
