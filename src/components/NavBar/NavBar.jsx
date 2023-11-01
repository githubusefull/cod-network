import {  useEffect, useState } from 'react';
import  {Link}  from "react-router-dom"; 
import saudi from '../FlagS.png';
import britich from '../britich.png';
import {FaBars, FaTimes} from 'react-icons/fa';
import jumla from '../NavBar/E-JUMLA.png' 
import Translation from '../../translations/data/global.json'
function NavBar() {

    const [menuIcon, setIcon] = useState(false);
    const [services, setServices] = useState(false);
    const [English, setEnglish] = useState("english")
    const [Arabic, setArabic] = useState("arabic")

    const [content, setContent] = useState({});
    const handleSmall = () => {
        setIcon(!menuIcon);
    }
   //const handleServices =() => {setServices(!services)}

useEffect(() => {
   if (Arabic === "arabic"){
    setContent(Translation.arabic)
  } else if (English === "english"){
    setContent(Translation.english)
  } 
}, [Arabic, English])
   
 console.log(content.navbar1)
  return (
    <header className="flex justify-between items-center w-full h-20 px-4 top-0 left-0 z-10  fixed">
      <nav className="max-w-[1366px] mx-auto h-[100px] flex justify-between items-center p-4">
    
      
        <ul className="hidden font-[800] text-1xl text-black lg:text-[16px] md:flex mt-3">
        <li className="lg:mr-4">
              <button className="ml-4  h-[40px] text-white text-[17px] px-16 font-[800] btn rounded-[50px] shadow-md  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-140  duration-300 ">
              ابدأ الآن
              </button>
          </li>
        <li className="ml-4 lg:mr-2">
            <div className='cursor-pointer mt-2'>
              <img
                className="rounded-[100%] w-[28px] h-[28px]  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-140  duration-300"
                src={britich}
                alt="Arabic"
              />
            </div>
          </li>
          <li className="lg:mr-4 cursor-pointer" >
            <div className='cursor-pointer mt-2'>
              <img
                className="rounded-[100%] w-[28px] h-[28px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-140  duration-300"
                src={saudi}
                alt="Arabic"
                
              />
            </div>
          </li>
         
          <li className="ml-8 lg:mr-8 mt-2">
            <Link to="/"  className='font-[800] text-[20px]'>كيف نعمل ؟</Link>
          </li>
        
          <li className="ml-4 lg:mr-8 mt-2">
      <div className="group inline-block relative font-[800] text-[20px]">
        <a className="rounded inline-flex items-center font-[800] text-[20px]">
        الخدمات
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </a>
        <ul className="absolute hidden w-[220px] text-gray-700 pt-1 group-hover:block">
          <li className="">
            <Link
              className="bg-gray-200 drop-text py-2 px-4 block whitespace-no-wrap text-[14px]"
              to="/sourcing">Sourcing</Link>
          </li>
          <li className="">
            <Link
              className="bg-gray-200  py-2 px-4 block whitespace-no-wrap text-[14px]"
              to="/custom-clearance">Custom Clearance</Link>
          </li>
          <li className="">
            <Link
              className="bg-gray-200  py-2 px-4 block whitespace-no-wrap text-[14px]"
              to="/warehousing&fulfillment">Warehousing & Fulfillment</Link>
          </li>
          <li className="">
            <Link
              className="bg-gray-200  py-2 px-4 block whitespace-no-wrap text-[14px]"
              to="/call-center">Call center</Link>
          </li>
          <li className="">
            <Link
              className="bg-gray-200  py-2 px-4 block whitespace-no-wrap text-[14px]"
              to="/cod-remittance">COD Remittance</Link>
          </li>
        </ul>
      </div>
          </li>
           
          <li className="ml-4 lg:mr-8 mt-2">
            <Link to="/About"  className='font-[800] text-[20px]'>من نحن ؟</Link>
          </li>
          <li className="ml-4 lg:mr-8 mt-2 ">
            <Link to="/FAQs" className='font-[800] text-[20px]'>الرئيسية</Link>
          </li>
        
        </ul> 
        <div className="mr-4 mt-2">
          <Link to="/">
            <img src={jumla} alt='' className='h-12'/>
          </Link>
        </div>
      </nav>
      <div>
        <div className='flex md:hidden'>
      
          <div onClick={handleSmall} className='text-gray-600 font-bold mt-2 mr-8'>

          {menuIcon ?
        (<FaTimes size={30} /> )
        :
        (<FaBars size={30} />) 
        }
         </div>
         <div className={menuIcon ? 
        'md:hidden absolute top-[79px]  right-0 left-0  justify-center w-full h-screen ease-in bg-white duration-300'
        :
        'md:hidden absolute top-[100px]  right-0 left-[-100%] flex justify-center items-center w-full h-screen  ease-in duration-300' 
        }>
         
     <div className='w-full text-center'>
     <ul className="font-[800] text-[20px] text-black">
          <li className="mt-5" onClick={handleSmall}>
            <Link to="/">الرئيسية</Link>
          </li>
          <li className="mt-5" onClick={handleSmall}>
            <Link to="/About">الخدمات</Link>
          </li>
          <li className="mt-5">
            <Link href="/How-it-works">من نحن ؟</Link>
          </li>
          <li className="mt-5">
            <Link href="/FAQs">كيف نعمل ؟</Link>
          </li>
          <li>
             <div className='mt-2 cursor-pointer inline-block'>
            <img
                className="rounded-[100%] w-[25px] h-[25px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-140  duration-300"
                src={saudi}
                alt="Arabic"
              />
               </div>
          </li>
          <li className="">
            <div className='cursor-pointer inline-block'>
              <img
                className="rounded-[100%] w-[25px] h-[25px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-140  duration-300"
                src={britich}
                alt="English"
              />
            </div>
          </li>
          <li className="mt-2">
              <button className="text-white text-[15px]  h-[40px] px-10 btn rounded-[50px] shadow-md  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-140  duration-300">
              ابدأ الآن
              </button>
          </li>
          </ul>
      </div>    
          </div> 
        </div>
     </div>
     
    </header>
  );
}

export default NavBar