import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RoomIcon from '@mui/icons-material/Room'; // Import the Material UI icon

const branches = [
  { name: "Hyderabad", location: "4-9-321/3, Sri Venkateswara colony, Hayathnagar, Near Sunrise Hospital, 501505" },
  { name: "Vijayawada", location: "D.No: 54-9-52, Flat No. 51B,100 Feet Road,3rd Cross Road, Jawahar, AutoNagar, Vijayawada, NTR District, Andhra Pradesh, Bharat, 520007" },
  { name: "Nellore", location: "Second floor, Sai Balaji Heights, 27-1-725, Main Road, beside SBI Bank, above Thire Global Services, Balaji Nagar, Nellore, Andhra Pradesh 524002" },
  { name: "Siricilla", location: "8-5-70/10/a, Sai Nagar, Beside Bheemeswara Gardens, Korutla Road, Vemulawada, Rajanna Siricilla, Telangana 505302" },
  { name: "Karimnagar", location: "H No.2-6-177/A, Laxapati Complex, Market Road, Karimnagar - 505001" },
  { name: "Warangal", location: "8-7-147, Opposite Hotel Grand Gayatri, Station Road, Warangal" },
  { name: "NagarKurnool", location: "17-28/4/A/1, CNR Memorial High School, Nagar Kurnool, Telangana - 509209" },
  { name: "Suryapeta", location: "Durajupally, Near Indian Petrol Bunk, Nereducharla Road, Suryapeta - 508213" },
  { name: "Adilabad", location: "Krishnam Peta, Jogapuram, Karimnagar, Telangana - 505307" },
  { name: "Mahabubabad", location: "S/o Bonagiri Lakshmi Narayana, 2-2-2 1/4/1a, RTC Bus Stand Road, Mahabubabad, Warangal, Telangana - 506101" },
  { name: "East Godavari", location: "Door No.36-10-40/1, Stadium Road, Rajahmundry - 533101, East Godavari District" },
  { name: "Jangaon", location: "Devaruppala, Jangaon, Telangana - 506302" },
  { name: "Adilabad", location: "1-5-75/90, Padmavathy Colony, Bainsa, Adilabad, Telangana - 504103" },
  { name: "Khammam", location: "Door No.2-5-63, P.S.R. Road, Khammam" },
  { name: "Siddipet", location: "Block Office Circle, Hyderabad Road, Siddipet, Telangana - 502103" },
  { name: "Nalgonda", location: "Durajupally, Near Indian Petrol Bunk, Nereducharla Road, Suryapeta - 508213" },
  { name: "Khammam", location: "1st Floor, 26-43-134, 4th Ln, 5th Cross, Bhagyanagar, Ongole, Andhra Pradesh - 523001" },
  { name: "Nizamabad", location: "H No.2-18, Oddat Peta, Makloor Mandal, Vaddatipalle District, Nizamabad, Telangana - 503003" }
];

export default function Branches() {
  const [scrollY, setScrollY] = useState(0);
  const maxHeight = 162 * branches.length - 100; // Adjust based on content height

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col items-center py-10 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-16">Our Branches</h2>
      {/* Static non-filled line */}
      <div className="absolute w-1 bg-gray-300 top-20 left-1/2 transform -translate-x-1/2 "></div>
      {/* Dynamic filling line */}
      <div
        className="absolute w-1 bg-green-500 top-20 left-1/2 transform -translate-x-1/2 transition-all duration-300"
        style={{ height: Math.min(scrollY * 1.5, maxHeight) + "px" }}
      ></div>
      <div className="w-full max-w-4xl">
        {branches.map((branch, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={"relative flex my-6 " + (index % 2 === 0 ? "justify-start" : "justify-end")}
          >
            {/* Card */}
            <div className={"bg-white p-4 shadow-lg rounded-lg w-80 " + (index % 2 === 0 ? "ml-6" : "mr-6") }>
              <h3 className="text-lg font-semibold text-gray-800">{branch.name}</h3>
              <div className="text-sm text-gray-600 flex items-start">
                <RoomIcon className="mr-2 text-green-500" /> {/* Icon */}
                <span><span className="font-semibold text-md">Location:</span> {branch.location}</span>
              </div>
            </div>
            {/* Connecting Line */}
            <div className="absolute w-[105px] h-1 bg-green-500 top-1/2 -translate-y-1/2 "
              style={{ [index % 2 === 0 ? "right" : "left"]: "50%" }}
            ></div>
            {/* Dot */}
            <div className="w-3 h-3 bg-green-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}