import { Link } from "react-router-dom"
import {RiLinkedinFill} from 'react-icons/ri';
import {BsYoutube} from "react-icons/bs";
import {AiOutlineTwitter} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {AiOutlineInstagram} from 'react-icons/ai';
const Footer = () => {

     
  const navLink1 = [
    
    {
      psth:"",
      icon: <BsFacebook className="group-hover:text-white text-white w-4 h-5" />
    },
    {
      path: "",
      icon: <RiLinkedinFill className="group-hover:text-white text-white w-4 h-5"/>
    },
    {
      path: "",
      icon: <AiOutlineInstagram className="group-hover:text-white text-white w-4 h-5"/>
    },
    {
      path: "https://www.freecodecamp.org/abdelouahidi",
      icon: <AiOutlineTwitter className="group-hover:text-white text-white w-4 h-5"/>
    },
    {
      path: "",
      icon: <BsYoutube className="group-hover:text-white text-white w-4 h-5"/>
    }
  ];
  const navLink2 = [
    {
      path: "/about",
      display: "About us",
    },
    {
      path: "/how-it-work",
      display: "How it Works?",
    },
    {
      path: "/location",
      display: "Locations",
    },
    {
      path: "/contact",
      display: "Contact us",
    },
    {
      path: "/terms&conditions",
      display: "Terms & Conditions",
    },
    {
      path: "/privacy-policy",
      display: "Privacy Policy",
    },
  ];
  const navLink3 = [
    {
      path: "/sourcing",
      display: "Sourcing",
    },
    {
      path: "/custom-clearance",
      display: "Custom Clearance",
    },
    {
      path: "/warehousing&fulfillment",
      display: "Warehousing & Fulfillment",
    },
    {
      path: "/shipping",
      display: "Shipping",
    },
    {
      path: "/call-center",
      display: "Call Center",
    },
    {
      path: "/cod-remittance",
      display: "COD Remittance",
    }
  ];
  const navLink4 = [
    {
      path: "/cod-network-academy",
      display: "COD Network Academy",
    },
    {
      path: "/help-center",
      display: "Help Center",
    },
    {
      path: "/FAQ",
      display: "FAQ",
    },
   ]
  const year = new Date().getFullYear();
  return (
    <footer className="pb-6 pt-24 bg-footer-bg">
      <div className="bg-footer-bg container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap p-8 gap-[30px]">
          <div>
            <Link to="/">
              <span className="cod-footer">COD</span>
              <span className="network-footer">Network</span>
            </Link>
            <p className="text-[15px] leading-7 font-[500] text-white mt-4"> 
            We Enable Everyone to Start,Grow<br></br>  and Scale E-commerce Business in<br></br>  the Middle East, Africa and Beyond.
              
            </p>
            <div className="flex items-center gap-3 mt-3">
  
              {navLink1.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-15  flex items-center justify-center group "
                >
                  {link.icon}
                </Link>
              ))}
            </div>
            <p className="text-[12px] leading-7 font-[500] text-gray-400 mt-1"> 
               © {year} COD.NETWORK
            </p>
          </div>
          <div>
            <h2 className="text-[15px] leading-[30px] font-[700] mb-4 text-white">
             ABOUT
            </h2>
            <ul>
              {navLink2.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[15px] leading-7 font-[700] hover:text-white text-gray-400"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[15px] leading-[30px] font-[700] mb-6 text-white ">
              SERVICES
            </h2>
            <ul>
              {navLink3.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[15px] leading-7 font-[700] hover:text-white text-gray-400"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[15px] leading-[30px] font-[700] mb-6 text-white">
            ADDITIONAL LINKS
            </h2>
            <ul>
              {navLink4.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[15px] leading-7 font-[700] hover:text-white text-gray-400"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer

