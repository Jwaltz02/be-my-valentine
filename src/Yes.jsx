import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Jermaine3 from "./assets/Jermaine3.jpg";
import { Link } from "react-router-dom";

function Yes() {
    const [hearts, setHearts] = useState([]);
    
    useEffect(() => {
        const newHearts = Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 40 + 20, // Heart size between 20px and 60px
        duration: Math.random() * 5 + 3, // Duration between 3s and 8s
        delay: Math.random() * 2, // Random delay for smoother animation
        }));
        setHearts(newHearts);
    }, []);

  return (
    <div>
    <div className='z-16 absolute text-[2vw] font-bold text-[blue] cursor-pointer hover:text-[orange] p-[2vw]'><Link to='/be-my-valentine/'>Return to Home</Link></div>
    <div className="flex justify-center">
    <div className="z-16 absolute mt-[5vw] text-[#ba2626] text-[4vw] font-bold">COME... WE'RE GOING ON A DATE!</div>
    <div style={{ backgroundImage: `url(${Jermaine3})` }} className="w-[30vw] h-[38vw] bg-cover z-16 absolute mt-[13vw]"></div>
    </div>
    <div className="absolute inset-0 overflow-hidden bg-pink-100">
    {hearts.map((heart) => (
      <motion.div
        key={heart.id}
        initial={{ opacity: 0, y: heart.y + 50 }}
        animate={{ opacity: 1, y: heart.y - 100 }}
        transition={{
          duration: heart.duration,
          delay: heart.delay,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute"
        style={{
          left: heart.x,
          fontSize: `${heart.size}px`,
        }}
      >
        ❤️
      </motion.div>
    ))}
  </div>
  </div>
  )
}

export default Yes