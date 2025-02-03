import React, { useRef } from 'react';
import Slider from 'react-slick';
import { ArrowBackIos, ArrowForwardIos, Star } from '@mui/icons-material';

const reviews = [
  {
    name: 'John Doe',
    review: "This product is fantastic! It exceeded my expectations and I will definitely recommend it to others.",
    photo: "https://via.placeholder.com/150/92c952", // Placeholder image
    rating: 5
  },
  {
    name: 'Jane Smith',
    review: "I am really happy with the results! The quality is amazing and the service was fast.",
    photo: "https://via.placeholder.com/150/771796",
    rating: 4
  },
  {
    name: 'Sam Wilson',
    review: "Great product! It works just as described and I can already see improvements. Highly recommended.",
    photo: "https://via.placeholder.com/150/24f355",
    rating: 3
  },
  {
    name: 'Sara Lee',
    review: "Absolutely love this! The features are great, and the customer support is top-notch.",
    photo: "https://via.placeholder.com/150/d32776",
    rating: 5
  },
];

const ReviewSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true, // Center the active slide
    focusOnSelect: true, // Focus on active slide when clicked
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false, // We'll add custom arrows
  };

  return (
    <div className="relative my-28">
      <h2 className="text-4xl font-bold text-center m-10">What Our Customers Say</h2>
      {/* Left and Right Buttons with Material UI Icons */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
        <button
          className="p-4 bg-green-600 text-white rounded-full shadow-lg"
          onClick={() => sliderRef.current.slickPrev()} // Use slickPrev from the ref
        >
          <ArrowBackIos />
        </button>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
        <button
          className="p-4 bg-green-600 text-white rounded-full shadow-lg"
          onClick={() => sliderRef.current.slickNext()} // Use slickNext from the ref
        >
          <ArrowForwardIos />
        </button>
      </div>

      <Slider {...settings} ref={sliderRef}>
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex justify-center items-center text-center p-6 transition-all duration-500"
          >
            <div className="w-[400px] h-[400px] bg-gradient-to-r from-green-500 to-white p-6 rounded-xl shadow-xl">
              <div className="flex justify-center mb-4">
                <img
                  src={review.photo}
                  alt={review.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 shadow-lg"
                />
              </div>
              <p className="text-lg font-semibold text-green-600">{review.name}</p>
              <div className="flex justify-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700">{review.review}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewSlider;
