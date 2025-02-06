import React from 'react';
import { ArrowForward } from '@mui/icons-material'; // Material UI Arrow icon

// Image imports
import service_img1 from '../../assets/images/service_img1.jpg';
import service_img2 from '../../assets/images/service_img2.jpg';
import service_img3 from '../../assets/images/service_img3.jpg';
import service_img4 from '../../assets/images/service_img4.jpg';
import service_img5 from '../../assets/images/service_img5.jpg';
import service_img6 from '../../assets/images/service_img6.jpg';
import service_img7 from '../../assets/images/service_img7.jpg';
import service_img8 from '../../assets/images/service_img8.jpg';
import service_img9 from '../../assets/images/service_img9.jpg';

const servicesData = [
  {
    id: 1,
    name: 'Agriculture Consulting',
    description: 'Providing expert advice on crop management, soil health, and sustainable farming practices to optimize yields and ensure profitability.',
    image: service_img1,
  },
  {
    id: 2,
    name: 'Pesticide Solutions',
    description: 'Offering a range of effective, eco-friendly pesticide solutions to protect crops from pests, diseases, and environmental stressors.',
    image: service_img2,
  },
  {
    id: 3,
    name: 'Fertilizer Supply',
    description: 'Supplying high-quality fertilizers that promote plant growth, enhance soil fertility, and maximize crop yield with minimal environmental impact.',
    image: service_img3,
  },
  {
    id: 4,
    name: 'Drone Farming Solutions',
    description: 'Providing advanced drone technology to monitor crops, spray pesticides, and assess field conditions, enhancing precision agriculture.',
    image: service_img4,
  },
  {
    id: 5,
    name: 'Smart Irrigation Systems',
    description: 'Installing automated irrigation systems that ensure efficient water usage, saving resources and improving crop health by delivering water precisely when needed.',
    image: service_img5,
  },
  {
    id: 6,
    name: 'Agri-Tech Solutions',
    description: 'Integrating technology and automation into farming practices, such as sensors, drones, and AI-powered tools, to streamline farm operations and increase productivity.',
    image: service_img6,
  },
  {
    id: 7,
    name: 'Soil Health Management',
    description: 'Providing soil testing, analysis, and recommendations to enhance soil fertility and structure, leading to healthier crops and improved yield over time.',
    image: service_img7,
  },
  {
    id: 8,
    name: 'Crop Protection Services',
    description: 'Offering comprehensive crop protection solutions, including disease-resistant crops, pesticide application, and integrated pest management techniques.',
    image: service_img8,
  },
  {
    id: 9,
    name: 'Organic Farm Solutions',
    description: 'Supporting the transition to organic farming by providing organic fertilizers, natural pest control, and advice on sustainable practices for healthier and environmentally friendly produce.',
    image: service_img9,
  },
];

const ServicePage = () => {
  return (
    <div className="space-y-16 p-14">
      {servicesData.map((service, index) => (
        <div
          key={service.id}
          className={`flex items-center ${
            index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
          }`} // Switch image and content order
        >
          {/* Content Block */}
          <div
            className={`flex-1 px-5 py-6 relative ${
              index % 2 === 0 ? 'text-left' : 'text-right'
            }`} // Text alignment for even/odd blocks
            style={{
              direction: index % 2 === 0 ? 'ltr' : 'rtl', // Text direction
            }}
          >
            <h2 className="text-[50px] font-bold uppercase opacity-10">
              {service.name}
            </h2>
            <h2 className="absolute text-4xl font-semibold top-16 flex items-center text-green-700">
              {service.name}
              <div className="w-28 bg-green-700 h-1 ml-5 mt-2"></div>
            </h2>
            <p className="text-md w-[500px] text-opacity-80 mt-4">
              {service.description}
            </p>

            <div className="mt-6 flex items-center">
              {index % 2 === 0 ? (
                <div className="border-t-2 border-dark-green w-6 mr-4"></div>
              ) : (
                <div className="border-t-2 border-dark-green w-6 ml-4"></div>
              )}
            </div>

            <div className="mt-4 flex items-center">
              <span className="text-gray-500 font-medium text-lg pb-2 hover:text-orange-900 transition-colors duration-300 tracking-wide flex items-center relative group">
                Know More
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>
              <ArrowForward
                className={`text-green-800 mb-2 ml-3 text-lg ${index % 2 !== 0 ? 'rotate-180' : ''}`}
              />
            </div>
            
          </div>

          {/* Image Block */}
          <div
            className={` relative w-80 h-80 rounded-tl-lg rounded-br-lg shadow-lg border-t-4 border-b-4 border-dark-green ${
              index % 2 === 0 ? 'ml-6' : 'mr-6'
            }`} // Adjust margin for even/odd blocks
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover rounded-tl-lg rounded-br-lg shadow-xl"
            />

            {/* Top Left Junction Line (Normal L Shape) */}
            <div className="absolute top-[-15px] left-[-15px]">
              <div className="w-16 h-[5px] bg-green-800"></div> {/* Horizontal part of L */}
              <div className="w-[6px] h-16 bg-green-800"></div> {/* Vertical part of L */}
            </div>

            {/* Bottom Right Junction Line (Rotated 90 Degrees) */}
            <div className="absolute bottom-[-13px] right-[-13px] transform rotate-90">
              {/* Horizontal part of reversed L (extends right) */}
              <div className="w-16 h-[5px] bg-green-800 absolute bottom-0 right-0"></div>

              {/* Vertical part of reversed L (extends up) */}
              <div className="w-[5px] h-16 bg-green-800 absolute top-0 right-0"></div>
            </div>
          </div>

          {/* Vertical Divider */}
          {index % 2 === 0 ? (
            <div className="h-full w-1 bg-dark-green mx-6"></div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default ServicePage;
