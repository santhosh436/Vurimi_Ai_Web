import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import framer-motion

// Import images
import img1 from "../../assets/images/img_1.jpg";
import img2 from "../../assets/images/img_2.jpg";
import img3 from "../../assets/images/img_3.jpg";
import img4 from "../../assets/images/img_4.jpg";
import img5 from "../../assets/images/img_5.jpg";
import img6 from "../../assets/images/img_6.jpg";
import img7 from "../../assets/images/img_7.jpg";
import profile from '../../assets/images/profile Pic.jpg';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const slides = [
    { image: img1, name: "Agri Mentor", employee: "surya" },
    { image: img2, name: "CO-Founder", employee: "prakash" },
    { image: img3, name: "CEO", employee: "suresh" },
    { image: img4, name: "Co-Founder,CTO", employee: "venkatesh" },
    { image: img5, name: "CFO", employee: "srinu" },
    { image: img6, name: "Mentor", employee: "sathyam" },
    { image: img7, name: "Mentor", employee: "pallavi" },
    { image: profile, name: "Web Designer", employee: "santhosh" }
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  // Check if the image slider section is in view for animation
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("trending");
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="trending" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-3xl text-green-500 font-semibold">- Meet Our Team -</h3>
      </div>

      <div className="container mx-auto mt-8">
        <div className="flex justify-center items-center">
          {/* Edge images (1st and 5th divs) */}
          <motion.div
            className="relative w-[200px] h-[200px] z-10 transition-transform duration-1000 ease-in-out"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
            transition={{ duration: 0.8, delay: 0.2 }} // Delay to start the animation after the previous one settles
          >
            <p className="text-center text-2xl font-bold text-black mb-8">{slides[currentIndex].name}</p>
            <div className="w-[200px] h-[200px] rounded-full overflow-hidden shadow-dual mx-auto mb-2">
              <img
                src={slides[currentIndex].image}
                alt={slides[currentIndex].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-[-100px] text-black text-center w-full">
              <p className="text-lg">{slides[currentIndex].employee}</p>
            </div>
          </motion.div>

          {/* Side images (2nd and 4th divs) */}
          <motion.div
            className="relative w-[260px] h-[260px] -ml-12 z-20 -mr-10 transition-transform duration-1000 ease-in-out"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
            transition={{ duration: 0.8, delay: 0.4 }} // Delay to start after previous image
          >
            <p className="text-center text-2xl font-bold text-black mb-8">{slides[(currentIndex + 1) % slides.length].name}</p>
            <div className="w-[260px] h-[260px] rounded-full overflow-hidden shadow-dual mx-auto mb-2">
              <img
                src={slides[(currentIndex + 1) % slides.length].image}
                alt={slides[(currentIndex + 1) % slides.length].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-[-100px] text-black text-center w-full">
              <p className="text-lg">{slides[(currentIndex + 1) % slides.length].employee}</p>
            </div>
          </motion.div>

          {/* Center image (3rd div) */}
          <motion.div
            className="relative w-[320px] h-[320px] z-30 transition-transform duration-1000 ease-in-out"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
            transition={{ duration: 0.8, delay: 0.6 }} // Delay to start after previous image
          >
            <p className="text-center text-2xl font-bold text-black mb-8">{slides[(currentIndex + 2) % slides.length].name}</p>
            <div className="w-[320px] h-[320px] rounded-full overflow-hidden shadow-dual mx-auto mb-2">
              <img
                src={slides[(currentIndex + 2) % slides.length].image}
                alt={slides[(currentIndex + 2) % slides.length].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-[-100px] text-black text-center w-full">
              <p className="text-lg">{slides[(currentIndex + 2) % slides.length].employee}</p>
            </div>
          </motion.div>

          {/* Side images (4th and 2nd divs) */}
          <motion.div
            className="relative w-[260px] h-[260px] -mr-12 -ml-12 z-20 transition-transform duration-1000 ease-in-out"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
            transition={{ duration: 0.8, delay: 0.8 }} // Delay to start after previous image
          >
            <p className="text-center text-2xl font-bold text-black mb-8">{slides[(currentIndex + 3) % slides.length].name}</p>
            <div className="w-[260px] h-[260px] rounded-full overflow-hidden shadow-dual mx-auto mb-2">
              <img
                src={slides[(currentIndex + 3) % slides.length].image}
                alt={slides[(currentIndex + 3) % slides.length].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-[-100px] text-black text-center w-full">
              <p className="text-lg">{slides[(currentIndex + 3) % slides.length].employee}</p>
            </div>
          </motion.div>

          {/* Edge images (5th div) */}
          <motion.div
            className="relative w-[200px] h-[200px] z-10 transition-transform duration-1000 ease-in-out"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
            transition={{ duration: 0.8, delay: 1 }} // Final delay for the last image
          >
            <p className="text-center text-2xl font-bold text-black mb-8">{slides[(currentIndex + 4) % slides.length].name}</p>
            <div className="w-[200px] h-[200px] rounded-full overflow-hidden shadow-dual mx-auto mb-2">
              <img
                src={slides[(currentIndex + 4) % slides.length].image}
                alt={slides[(currentIndex + 4) % slides.length].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-[-100px] text-black text-center w-full">
              <p className="text-lg">{slides[(currentIndex + 4) % slides.length].employee}</p>
            </div>
          </motion.div>
        </div>

        {/* Button Section */}
        <div className="flex justify-center mt-24">
          <button onClick={handlePrev} className="px-4 py-2 bg-green-500 text-white rounded-lg mr-4">
            Previous
          </button>
          <button onClick={handleNext} className="px-4 py-2 bg-green-500 text-white rounded-lg">
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
