import React from 'react';

const products = [
  {
    image: "https://via.placeholder.com/800x400.png?text=AgriDrone+X1",
    title: "AgriDrone X1",
    description: "Revolutionize your farming with the AgriDrone X1, designed for precision agriculture.",
    price: "₹1,50,000",
    reviews: 4.5
  },
  {
    image: "https://via.placeholder.com/800x400.png?text=CropSurveyor+Pro",
    title: "CropSurveyor Pro",
    description: "Enhance crop monitoring and yield prediction with the advanced CropSurveyor Pro.",
    price: "₹2,00,000",
    reviews: 4.7
  },
  {
    image: "https://via.placeholder.com/800x400.png?text=FieldGuardian+Elite",
    title: "FieldGuardian Elite",
    description: "Protect and manage your fields efficiently with the FieldGuardian Elite drone.",
    price: "₹2,50,000",
    reviews: 4.8
  }
];

const HomeProducts = () => {
  return (
    <section className="flex justify-center items-center flex-wrap my-10 mx-auto">
      <h2 className="text-3xl font-bold mb-6 w-full ml-10 text-green-700">Feature Products</h2>
      {products.map((product, index) => (
        <div
          key={index}
          className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-gradient-to-br from-green-400 to-white h-[400px]"
        >
          <div
            className="w-full h-32 flex justify-center items-center"
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Image section remains unchanged */}
          </div>
          <div className="px-6 py-4 h-full">
            <div className="font-bold text-xl mb-2 text-gray-800 mt-[70px]">
              {product.title}
            </div>
            <p className="text-black text-base mt-[10px]">
              Price: {product.price}
            </p>
            <p className="text-black text-base mt-[10px]">
              Reviews: {product.reviews} ⭐
            </p>
            <p className="text-black text-base mt-[10px]">
              {product.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HomeProducts;
