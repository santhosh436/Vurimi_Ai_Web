import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#contact", label: "Products" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" }
];

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-green-400 to-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        {/* <img src="/path/to/logo.png" alt="Logo" className="h-8 w-8 mr-2" /> */}
        <span className="text-xl font-bold">Vurimi AI</span>
      </div>
      <div className="flex space-x-4">
        {navItems.map(item => (
          <a key={item.href} href={item.href} className="text-gray-800 hover:text-green-600">
            {item.label}
          </a>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search..." 
            className="px-2 py-1 border border-gray-300 rounded-md pl-10"
          />
          <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
        <AccountCircleIcon className="text-gray-800" style={{ fontSize: '32px' }} />
      </div>
    </nav>
  );
};

export default Navbar;
