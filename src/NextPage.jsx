import React from 'react'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function NextPage() {
    const [hearts, setHearts] = useState([]);
    const [index, setIndex] = useState(0);

    const texts = [
        "From the moment we first connected, it was clear our energy and personalities just clicked. There was an undeniable bond between us, like two pieces always meant to fit together. I still remember the message I sent you on August 8th, 2023. After liking each other’s stories for a whole year, I took a leap of faith and reached out. Little did I know, that long-awaited DM would lead to something I’ll forever treasure…",
        "When we met in person on August 25th, it didn’t go quite as planned, but you still gave me the most amazing gift— a second chance. The next day, I took you on another date, and everything felt right. From that moment on, my dreams of us were restored…",
        "On September 1st, 2023, we spent the evening at the CNE, and everything fell into place so naturally. For the first time, I wasn’t nervous at all. We held hands for the first time, laughed as we miserably tried and failed at the games, and I even won you your first teddy bear. But the moment I’ll never forget was during the gondola ride, when we shared our first kiss…",
        "October 22nd, 2023, was another unforgettable night. After our visit to Pingle’s Pumpkin Patch, we spent the evening carving pumpkins in my neighborhood. Beneath the stars, you asked me to be your boyfriend, and I couldn’t have been happier to say yes…",
        "Your warmth, kindness, and respect for everyone, especially my family, fills me with gratitude. You’ve given me more reassurance and happiness than I ever knew I needed, always lifting me up when I’m down. You motivate me to be the best version of myself, and I admire your strength and independence. You’ve accomplished so much on your own, and I’m endlessly proud of you…",
        "You’ve become my safe haven. You’ve shown me what it truly means to be supported and understood, and I’ll always be grateful for that. It’s no surprise that everyone who knows you adores you, as you light up every room you enter…",
        "Thank you for loving me, for being you, and for allowing me to be myself. You mean everything to me, Angel, and I’m so grateful to share this beautiful journey with you."
      ];

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
 
      useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 20000); // Each text stays for 4 seconds before fading out
    
        return () => clearInterval(interval);
      }, []);

  return (
        <div>
        <div className='z-14 absolute text-[2vw] font-bold text-[blue] cursor-pointer hover:text-[orange] p-[2vw]'><Link to='/'>Return to Home</Link></div>
        <div>
        <div className='h-screen flex justify-center items-center'>
        <div className='rounded-full bg-[blue] w-[8vw] h-[3vw] z-18 fixed mt-[30vw] text-white text-center content-center hover:opacity-50 cursor-pointer'><Link to='/ImagesPage'>Next</Link></div>
        <motion.div
            key={index} // Triggers animation when text changes
            initial={{ opacity: 0, y: 20 }} // Starts slightly below
            animate={{ opacity: 1, y: 0 }} // Fades in and moves up
            exit={{ opacity: 0, y: -20 }} // Fades out and moves up
            transition={{ duration: 1 }}
            className="items-center text-center text-[2.5vw] font-semibold text-gray-800 z-14 p-[5vw]"
            >
            <div>
                {index === 4 ? '3) ' : `${index + 1}) `}
                {texts[index]}
            </div>
        </motion.div>
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

export default NextPage