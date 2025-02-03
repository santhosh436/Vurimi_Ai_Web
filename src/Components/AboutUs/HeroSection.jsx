import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis"; // Correct Lenis import

const HeroSection = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      mouseMultiplier: 1,
      scrollMultiplier: 1,
    });

    function animate(time) {
      lenis.raf(time);
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    return () => {
      lenis.destroy(); // Clean up when the component unmounts
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[92vh] flex items-center justify-center bg-cover bg-center overflow-hidden">
        {/* Background Image Animation */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/1d/c3/e9/1dc3e9a6a59193cf1a40484ba7ccc5a1.jpg')", // Replace with your image
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "120%", // Increased height to cover and give a zoom effect
            width: "100%",
          }}
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Text Content */}
        <div className="absolute bottom-[120px] left-[10px] z-10 text-left px-4">
          {/* Main Text */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            Welcome to Our Company
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-lg md:text-2xl text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            Building a brighter future together.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
