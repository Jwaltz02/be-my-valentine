import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Jermaine2 from "./assets/Jermaine2.jpg";
import { Link } from "react-router-dom";

function ValentineQuestion() {
     const [hearts, setHearts] = useState([]);
     const [isHovered, setIsHovered] = useState(false);
    
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
    <div className='z-16 absolute text-[2vw] font-bold text-[blue] cursor-pointer hover:text-[orange] p-[2vw]'><Link to='/'>Return to Home</Link></div>
    <div className="flex justify-center">
    <div className="absolute z-16 w-[50vw] h-[10vw] text-[#ba2626] text-[5vw] mt-[3vw] font-bold text-center transition-transform duration-80 scale-125 animate-pulse">WILL YOU BE MY VALENTINE?</div>
    <div className="flex flex-wrap justify-center items-center mt-[11vw] gap-x-[5vw] text-[5vw]">
        <div className="z-16 text-[red] font-bold hover:scale-125"><Link to="/Yes">YES!</Link></div>
        <div style={{ backgroundImage: `url(${Jermaine2})` }} className="rounded-full w-[30vw] h-[38vw] bg-cover flex justify-center z-14"></div>
        <motion.div className="z-16 text-[blue] font-bold w-[10vw]"
         initial={{ x: 0, y: 0 }}
         animate={
           isHovered
             ? {
                 x: [0, 200, -200, 80, -80, 0], // Random movement along x-axis
                 y: [0, 80, -90, 100, -200, 0], // Random movement along y-axis
                 transition: {
                   duration: 4,
                   repeat: Infinity,
                   repeatType: "reverse",
                 },
               }
             : { x: 0, y: 0 }
         }
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
        >NO</motion.div>
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
  </div>
  )
}

export default ValentineQuestion