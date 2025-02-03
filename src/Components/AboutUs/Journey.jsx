import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion"; // Import motion

const Journey = () => {
  const [rotation, setRotation] = useState(45); // Initial rotation set to 45 degrees
  const [activeSection, setActiveSection] = useState(0);
  const [circlePositioned, setCirclePositioned] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const journeyRef = useRef(null);

  const sections = [
    { heading: "Section 1", content: "This is the content for Section 1." },
    { heading: "Section 2", content: "This is the content for Section 2." },
    { heading: "Section 3", content: "This is the content for Section 3." },
    { heading: "Section 4", content: "This is the content for Section 4." },
  ];

  const handleNext = () => {
    setActiveSection((prevSection) => (prevSection + 1) % sections.length);
    setRotation((prevRotation) => prevRotation + 90);
  };

  const handlePrev = () => {
    setActiveSection((prevSection) => (prevSection - 1 + sections.length) % sections.length);
    setRotation((prevRotation) => prevRotation - 90);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartAnimation(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentJourneyRef = journeyRef.current;

    if (currentJourneyRef) {
      observer.observe(currentJourneyRef);
    }

    return () => {
      if (currentJourneyRef) {
        observer.unobserve(currentJourneyRef);
      }
    };
  }, []);

  return (
    <div className="parallax-wrapper">
      <div id="journey" ref={journeyRef} className="journey-container flex items-center justify-center h-screen bg-gray-100 relative">
        {/* Circle with sections */}
        
        <motion.div
          className="circle-container absolute flex flex-col items-center"
          initial={{ x: "50vw", y: 0, opacity: 0, scale: 0 }}
          animate={startAnimation ? (circlePositioned ? { x: "-650px", y: 0, opacity: 1, scale: 1 } : { x: 0, y: 0, opacity: 1, scale: 1 }) : {}}
          transition={{ duration: 1 }}
          onAnimationComplete={() => {
            setTimeout(() => setCirclePositioned(true), 1000); // Move left after 1 second delay
          }}
        >
          <motion.div
            className="rotating-circle w-[500px] h-[500px] bg-[#00ff7f] rounded-full shadow-xl transform origin-center transition-transform duration-500 ease-out"
            style={{
              transform: `rotate(${rotation}deg)`,
            }}
          >
            <div className="circle-section section-1 absolute top-[25%] left-[75%] transform -translate-x-1/2 -translate-y-1/2 rotate-[45deg] flex items-center justify-center font-bold text-black">
              <span>{sections[0].heading}</span>
            </div>
            <div className="circle-section section-2 absolute top-[75%] left-[75%] transform -translate-x-1/2 -translate-y-1/2 rotate-[135deg] flex items-center justify-center font-bold text-black">
              <span>{sections[3].heading}</span>
            </div>
            <div className="circle-section section-3 absolute top-[75%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 rotate-[225deg] flex items-center justify-center font-bold text-black">
              <span>{sections[2].heading}</span>
            </div>
            <div className="circle-section section-4 absolute top-[25%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 rotate-[315deg] flex items-center justify-center font-bold text-black">
              <span>{sections[1].heading}</span>
            </div>
            <div className="inner-circle absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-white rounded-full z-10 shadow-xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="divider vertical absolute bg-white w-[2px] h-full left-1/2 transform -translate-x-1/2"></div>
            <div className="divider horizontal absolute bg-white w-full h-[2px] top-1/2 transform -translate-y-1/2"></div>
          </motion.div>
        </motion.div>

        {/* Section content */}
        {circlePositioned && (
          <motion.div
            className="content-display mx-auto text-center max-w-[500px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl text-[#006400] mb-5">{sections[activeSection].heading}</h2>
            <motion.p
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50 }}
            >
              {sections[activeSection].content}
            </motion.p>
            <div className="mt-5">
              <button
                onClick={handlePrev}
                className="px-6 py-2 text-white bg-[#006400] rounded-md hover:bg-[#004d00] transition duration-300 ease-in-out"
              >
                Prev
              </button>
              <button
                onClick={handleNext}
                className="ml-4 px-6 py-2 text-white bg-[#006400] rounded-md hover:bg-[#004d00] transition duration-300 ease-in-out"
              >
                Next
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Journey;
