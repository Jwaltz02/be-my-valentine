import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import React from 'react'
import Angel1 from "./assets/Angel1.jpg"
import Angel2 from "./assets/Angel2.jpg"
import Angel3 from "./assets/Angel3.jpg"
import Angel4 from "./assets/Angel4.jpg"
import Angel5 from "./assets/Angel5.jpg"
import Angel6 from "./assets/Angel6.jpg"
import Angel7 from "./assets/Angel7.jpg"
import Angel8 from "./assets/Angel8.jpg"
import Angel9 from "./assets/Angel9.jpg"
import Angel10 from "./assets/Angel10.jpg"
import Angel11 from "./assets/Angel11.jpg"
import Angel12 from "./assets/Angel12.jpg"
import Angel13 from "./assets/Angel13.jpg"
import { Link } from "react-router-dom";

function ImagesPage() {
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

    const images = [
        Angel1,
        Angel2,
        Angel3,
        Angel4,
        Angel5,
        Angel6,
        Angel7,
        Angel8,
        Angel9,
        Angel10,
        Angel11,
        Angel12,
        Angel13,
      ];
  return (
    <div>
        <div className="overflow-hidden inset-0 bg-pink-100 h-[100vw]">
        <div className="flex flex-wrap justify-center items-center gap-4 p-4 z-16 absolute">
            {images.map((src, index) => (
                <motion.img
                key={index}
                src={src}
                alt={`Image ${index + 1}`}
                className="w-[20vw] h-[20vw] object-cover rounded-lg shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: index * 0.5 }} // Staggered fade-in
                />
            ))}
            <div className='rounded-full bg-[#ba2626] w-[19vw] h-[3vw] text-white text-center content-center hover:opacity-50 cursor-pointer'><Link to="/ValentineQuestion">I need to ask you something..</Link></div>
        </div>
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

export default ImagesPage