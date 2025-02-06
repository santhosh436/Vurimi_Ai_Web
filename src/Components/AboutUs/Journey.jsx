import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion"; // Import motion
import support_img1 from "../../assets/images/support_img1.jpg";
import support_img2 from "../../assets/images/support_img2.jpg";
import support_img3 from "../../assets/images/support_img4.jpg";
import agri_img1 from "../../assets/images/Agri_img1.jpg";
import agri_img2 from "../../assets/images/Agri_img2.jpg";
import agri_img3 from "../../assets/images/Agri_img3.jpg";
import water_img1 from "../../assets/images/Water_Img1.jpg";
import water_img2 from "../../assets/images/Water_Img2.jpg";
import water_img3 from "../../assets/images/Agri_img6.jpg";

const Journey = () => {
  const [rotation, setRotation] = useState(45); // Initial rotation set to 45 degrees
  const [activeSection, setActiveSection] = useState(0);
  const [circlePositioned, setCirclePositioned] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const journeyRef = useRef(null);

  const sections = [
    {
      heading: "Supporting Farmers",
      content:
        "We proudly support and empower over 10,842 farmers in the agriculture sector, helping them enhance productivity, sustainability, and income. Our initiatives provide them with the necessary tools and knowledge for long-term success in farming.",
      images: [support_img1, support_img2, support_img3],
    },
    {
      heading: "Water Conservation",
      content:
        "Through our efforts, we have successfully saved an impressive 24,21,910 litres of water. Our water-efficient farming practices help conserve this precious resource, benefiting both the environment and farmers.",
      images: [water_img1, water_img2, water_img3],
    },
    {
      heading: "Promoting Non-Chemical Farming",
      content:
        "We have boosted non-chemical farming practices from 36.48% to 43.77%, fostering healthier ecosystems and producing safer, pesticide-free crops. Our commitment to organic farming is creating a more sustainable future for agriculture.",
      images: [agri_img1, agri_img2, agri_img3],
    },
    {
      heading: "Technological Awareness for Farmers",
      content:
        "We provide crucial awareness and training to farmers on how to incorporate advanced farming technologies. This helps them improve crop yields, optimize resources, and stay ahead in the ever-evolving agricultural landscape.",
      images: [agri_img1, agri_img2, agri_img3],
    },
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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });

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
    <div className="parallax-wrapper relative">
      <div
        id="journey"
        ref={journeyRef}
        className="journey-container flex items-center justify-center h-screen bg-gray-100 relative"
      >
        {/* Circle with sections */}
        <motion.div
          className="circle-container absolute flex flex-col items-center"
          initial={{ x: "50vw", y: 0, opacity: 0, scale: 0 }}
          animate={
            startAnimation
              ? circlePositioned
                ? { x: "-650px", y: 0, opacity: 1, scale: 1 }
                : { x: 0, y: 0, opacity: 1, scale: 1 }
              : {}
          }
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
            className="content-display mx-auto text-center max-w-[800px] flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Data Section */}
            <div className="data-section w-1/2 px-6 text-left">
              <h2 className="text-2xl text-[#006400] mt-16">
                {sections[activeSection].heading}
              </h2>
              <motion.p
                className="text-md text-gray-700 mt-3"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 50 }}
              >
                {sections[activeSection].content}
              </motion.p>
            </div>

           {/* Images Section */}
            <div className="images-section absolute -right-44 w-[800px]">
              <div className="flex space-x-3 mb-4">
                {/* First and second image side by side */}
                <img
                  src={sections[activeSection].images[0]}
                  alt="one"
                  className="w-[280px] h-[170px] object-cover rounded-lg shadow-gray-500 shadow-md"
                />
                <img
                  src={sections[activeSection].images[1]}
                  alt="two"
                  className="w-[280px] h-[170px] object-cover rounded-lg shadow-gray-500 shadow-md"
                />
              </div>
              {/* Third image centered below the above two */}
              <div className="flex justify-center">
                <img
                  src={sections[activeSection].images[2]}
                  alt="three"
                  className="w-[300px] h-[160px] object-cover rounded-lg mr-52 shadow-gray-500 shadow-md"
                />
              </div>
            </div>

          </motion.div>
        )}
      </div>

      {/* Buttons placed below the content */}
      <div className="mt-8 flex justify-center space-x-4 absolute bottom-8 left-64">
        <button
          onClick={handlePrev}
          className="px-6 py-2 text-white bg-[#006400] rounded-md hover:bg-[#004d00] transition duration-300 ease-in-out w-32"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-2 text-white bg-[#006400] rounded-md hover:bg-[#004d00] transition duration-300 ease-in-out w-32"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Journey;
