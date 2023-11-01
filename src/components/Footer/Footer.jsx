import { Link } from "react-router-dom"
import {RiLinkedinFill} from 'react-icons/ri';
import {BsYoutube} from "react-icons/bs";
import {AiOutlineTwitter} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {AiOutlineInstagram} from 'react-icons/ai';
import jumla from './jumla2.png'
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
      path: "/",
      display: "الرئيسية",
    },
    {
      path: "/about-us",
      display: "من نحن ؟",
    },
    {
      path: "/our-services",
      display: "خدماتنا",
    },
    {
      path: "/how-it-work",
      display: "كيف نعمل ؟",
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
      path: "/phone",
      display: "0600 00 00 83",
    },
    {
      path: "/email",
      display: "support@e-jumla.com",
    },
    
   ]
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="bg-footer-bg">
        <div className="bg-white  h-full mx-20  font-[600] rounded-b-lg">
      <div className="flex justify-center text-center p-8   font-[500] text-black">
        </div>
      </div>
      
        </div>
    <footer className=" bg-footer-bg pt-10">
      <div className="bg-footer-bg container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap p-8 gap-[30px]">
          <div>
            <Link to="/">
              <img src={jumla} className="footer-logo" alt="" />
            </Link>
            <p className="text-[20px] leading-7 font-[500] text-white mt-4">
              ابدأ, إنمو, تطور مع   <span className="font-[600] text-[20px] text-orange">جملة ماروك</span>  
 
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
               © {year} E-JUMLA
            </p>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-4 text-white">
             القائمة
            </h2>
            <ul>
              {navLink2.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[20px]  leading-7 font-[700] hover:text-white text-gray-400"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-4 text-white ">
              خدماتنا
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
            <h2 className="text-[20px] leading-[30px] font-[700] mb-4 text-white">
            تواصل معنا
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
    </div>
   
  );
}

export default Footer

