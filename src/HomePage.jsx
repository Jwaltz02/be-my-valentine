import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Jermaine from "./assets/Jermaine.jpg";
import { Link } from "react-router-dom";

function Homepage() {
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
      <div className='h-screen w-screen flex justify-center items-top'>
        <div className="z-14 flex flex-col items-center">
            <div className='w-[50vw] h-[10vw] text-[#ba2626] text-[5vw] mt-[2vw] ml-[14vw] font-bold'>Hello my love...</div>
            <div style={{ backgroundImage: `url(${Jermaine})` }} className="w-[30vw] h-[38vw] bg-cover flex justify-center"><div className="flex items-center justify-center w-[10vw] h-[30vw] ml-[6vw]"><div className="h-[3vw] w-[3vw] text-[3.2vw] transition-transform duration-80 hover:scale-125 hover:animate-pulse cursor-pointer"><Link to="/NextPage">❤️</Link></div></div><div className="w-[fit] h-[2.7vw] fixed text-white font-bold bg-[black] p-[0.5vw]">CLICK MY HEART BELOW</div></div>
        </div>
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
    );
}

export default Homepage