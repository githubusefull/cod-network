/* eslint-disable react/no-unescaped-entities */
import { AiFillCheckCircle } from "react-icons/ai";
const OurServices = () => {
  return (
    <div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2  gap-2 text-center py-8  sm:px-0">
        <div className={` hover:scale-105 duration-500  rounded-lg p-10 `}>
          <img
            src="https://cod.network/portal-assets/img/our_locations.png"
            className="w-[400px]  mx-auto"
          />
        </div>

        <div className={` hover:scale-105 duration-500  rounded-lg p-8`}>
          <div className="mt-1 text-4xl font-[500] text-black p-10">
            <span className="font-[800]">الاستيراد</span>
          </div>
          <div>
            <p className=" text-center text-black text-[20px] p-5 font-[600]">
              {" "}
              تعمل شركة <span className="text-orange">جملة ماروك</span> على
              تسهيل اقتناءك للمنتجات والسلع من الصين كما تتشغل فرق التوريد لدينا
              بالعثور على المنتجات ذات الجودة العالية والمناسبة لك
            </p>

            <div className="p-8 mx-5">
            <div className="flex justify-end m-8">
              البحث عن موردين -  
                <AiFillCheckCircle fontSize={32} className="text-orange ml-4" />
            </div>
            <div className="flex justify-end m-8">
            مراقبة الجودة -  
                <AiFillCheckCircle fontSize={32} className="text-orange ml-4" />
            </div>
            <div className="flex justify-end m-8">
            التفاوض على الأسعار - 
                            <AiFillCheckCircle fontSize={32} className="text-orange ml-4" />
            </div>
            <div className="flex justify-end m-8">
            الشحن للشركات الناشئة والتجار -  
                <AiFillCheckCircle fontSize={32} className="text-orange ml-4" />
            </div>
            </div>
          </div>

          <div className="justify-center mt-1 text-1xl font-[500] hover:scale-105 duration-500 cursor-pointer p-10">
            <button className="h-[40px] text-white text-[18px] font-[600] px-8  btn rounded-[50px] shadow-md  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-140  duration-300 ">
              ابدأ خطوتك الأولى
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
