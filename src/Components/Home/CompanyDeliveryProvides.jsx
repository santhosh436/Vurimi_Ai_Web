import React from 'react';
import { CameraAlt, Hd, BatteryChargingFull, PropaneTank } from '@mui/icons-material';

const CompanyDeliveryProvides = () => {
  return (
    <section className="my-16 py-28 px-20 bg-white">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-green-700">
            We Offer a Very Healthy Reduce Expense & Return On Investment
          </h1>
          <p className="text-xl text-black mt-2">
            High-quality drones are much more affordable than monitoring with aeroplanes & helicopter flights in the air.
          </p>
        </div>
      </div>

      {/* Data part (contains 2 rows of services) */}
      <div className="flex flex-wrap justify-between space-y-8">
        {/* First row of services (2 services side by side) */}
        <div className="flex items-center w-full sm:w-1/2 space-x-4">
          <CameraAlt style={{ fontSize: 30, color: 'green' }} />
          <div>
            <h2 className="text-xl font-semibold text-green-700">Aerial Photography</h2>
            <p className="text-black">
              A drone is an unmanned aerial vehicle (UAV) that is fitted with various equipment including photography and videography leverage agile frameworks.
            </p>
          </div>
        </div>

        <div className="flex items-center w-full sm:w-1/2 space-x-4">
          <Hd style={{ fontSize: 30, color: 'green' }} />
          <div>
            <h2 className="text-xl font-semibold text-green-700">HQ Resolution</h2>
            <p className="text-black">
              These devices can hover and maneuver above your event capturing images and video of not just individuals iterative approaches to corporate strategy.
            </p>
          </div>
        </div>

        {/* Second row of services (2 services side by side) */}
        <div className="flex items-center w-full sm:w-1/2 space-x-4">
          <BatteryChargingFull style={{ fontSize: 30, color: 'green' }} />
          <div>
            <h2 className="text-xl font-semibold text-green-700">Powerful & Portable</h2>
            <p className="text-black">
              Drone event videographers can record all the activities (in the water too) throughout the event and record from inaccessible foster collaborative proposition.
            </p>
          </div>
        </div>

        <div className="flex items-center w-full sm:w-1/2 space-x-4">
          <PropaneTank style={{ fontSize: 30, color: 'green' }} />
          <div>
            <h2 className="text-xl font-semibold text-green-700">Propellers</h2>
            <p className="text-black">
              Our drone event services provide you with a skilled UAV pilot that will provide drone event photography or good videography a robust synopsis for high level.
            </p>
          </div>
        </div>
      </div>

      {/* Image part (below services) */}
      <div className="flex justify-center mt-8">
        <img
          src="https://via.placeholder.com/500x500.png?text=Drones+in+Action"
          alt="Drones in Action"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default CompanyDeliveryProvides;
