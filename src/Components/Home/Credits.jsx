import React from 'react';
import { Grid} from '@mui/material';
import { FlightTakeoff, WorkOutline, Person, TrendingUp } from '@mui/icons-material';

const Credits = () => {
  return (
    <section className=" my-16 bg-gradient-to-br from-green-400 to-white py-28 px-20">
      <Grid container spacing={4} justifyContent="center">
        {/* Flight Time */}
        <Grid item xs={12} sm={6} md={3} className="flex justify-center items-center">
          <FlightTakeoff style={{ fontSize: 50, color: 'green' }} />
          <div className="ml-4">
            <h1 className=' text-lg font-semibold'>flight time</h1>
            <h1 className=' text-lg 'variant="body1">On-time services for every client</h1>
          </div>
        </Grid>

        {/* Projects Done */}
        <Grid item xs={12} sm={6} md={3} className="flex justify-center items-center">
          <WorkOutline style={{ fontSize: 50, color: 'green' }} />
          <div className="ml-4">
            <h1 className=' text-lg font-semibold'>Projects Done</h1>
            <h1 className=' text-lg 'variant="body1">Successful projects delivered</h1>
          </div>
        </Grid>

        {/* Satisfied Clients */}
        <Grid item xs={12} sm={6} md={3} className="flex justify-center items-center">
          <Person style={{ fontSize: 50, color: 'green' }} />
          <div className="ml-4">
            <h1 className=' text-lg font-semibold'>Satisfied Clients</h1>
            <h1 className=' text-lg 'variant="body1">Clients who trust our services</h1>
          </div>
        </Grid>

        {/* High Productivity */}
        <Grid item xs={12} sm={6} md={3} className="flex justify-center items-center">
          <TrendingUp style={{ fontSize: 50, color: 'green' }} />
          <div className="ml-4">
            <h1 className=' text-lg font-semibold'>High Productivity</h1>
            <h1 className=' text-lg 'variant="body1">Driven to achieve excellence</h1>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Credits;
