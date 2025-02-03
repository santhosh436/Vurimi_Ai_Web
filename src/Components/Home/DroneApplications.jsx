import React from 'react';
import { Agriculture, Camera, Opacity } from '@mui/icons-material';

const DroneApplications = () => {
  const applications = [
    {
      icon: <Camera fontSize="large" className="text-green-500" />,
      title: "Crop Monitoring and Management",
      description: "Drones provide real-time aerial images to monitor crop health, identify pest infestations, and optimize irrigation.",
      image: "https://via.placeholder.com/600x350"
    },
    {
      icon: <Agriculture fontSize="large" className="text-blue-500" />,
      title: "Precision Agriculture",
      description: "Drones apply fertilizers and pesticides precisely where needed, reducing chemical use and saving costs.",
      image: "https://via.placeholder.com/600x350"
    },
    {
      icon: <Opacity fontSize="large" className="text-red-500" />,
      title: "Soil and Field Analysis",
      description: "Drones conduct soil analysis before planting, creating 3D maps for efficient irrigation and fertilization.",
      image: "https://via.placeholder.com/600x350"
    },
  ];

  return (
    <div className="flex flex-col space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8">Applications of Drones</h1>
      {applications.map((app, index) => (
        <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
          <div className="w-full md:w-1/2 p-4">
            <img
              src={app.image}
              alt={app.title}
              className="rounded-lg shadow-lg h-[350px] w-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-gradient-to-r from-green-400 to-white shadow-lg rounded-lg p-6 h-[350px] flex flex-col justify-center relative">
              <div className="flex items-center space-x-4 mb-4">
                {app.icon}
                <h2 className="text-2xl font-semibold">{app.title}</h2>
              </div>
              <p className="text-gray-700">{app.description}</p>
              <div className="absolute -bottom-4 left-10 w-0 h-0 border-t-[20px] border-t-transparent border-l-[20px] border-l-green-400 border-b-[20px] border-b-transparent"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DroneApplications;
