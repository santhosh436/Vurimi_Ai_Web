import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-green-500 to-white text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Part 1: Company Info */}
        <div>
          <div className="flex items-center mb-4">
            <h2 className="text-lg font-semibold">Company Name</h2>
          </div>
          <p>1234 Street Name, City, Country</p>
          <div className="mt-4 mb-3">
            <a href="https://facebook.com" className="text-blue-500 mr-2" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
            <a href="https://twitter.com" className="text-blue-400 mr-2" target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </a>
            <a href="https://instagram.com" className="text-red-500 mr-2" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a href="https://linkedin.com" className="text-blue-600" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>

        {/* Part 2: Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Explore</h3>
          <ul>
            <li><a href="sample" className="text-gray-700 hover:text-white">Sample Link 1</a></li>
            <li><a href="sample" className="text-gray-700 hover:text-white">Sample Link 2</a></li>
            <li><a href="sample" className="text-gray-700 hover:text-white">Sample Link 3</a></li>
            <li><a href="sample" className="text-gray-700 hover:text-white">Sample Link 4</a></li>
          </ul>
        </div>

        {/* Part 3: Know More */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Know More</h3>
          <ul>
            <li><a href="sample1" className="text-gray-700 hover:text-white">Sample Link 1</a></li>
            <li><a href="sample" className="text-gray-700 hover:text-white">Sample Link 2</a></li>
            <li><a href="sample" className="text-gray-700 hover:text-white">Sample Link 3</a></li>
            <li><a href="sample" className="text-gray-700 hover:text-white">Sample Link 4</a></li>
          </ul>
        </div>

        {/* Part 4: About */}
        <div>
          <h3 className="text-lg font-semibold mb-2">About</h3>
          <ul>
            <li><a href="sample" className="text-gray-700 hover:text-white">Sample Link 1</a></li>
            <li><a href="sample" className="text-gray-700 hover:text-white">Sample Link 2</a></li>
            <li><a href="sample" className="text-gray-700 hover:text-white">Sample Link 3</a></li>
            <li><a href="sample" className="text-gray-700 hover:text-white">Sample Link 4</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-10 pt-4">
        <p className="text-center text-gray-600">© 2025 Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
