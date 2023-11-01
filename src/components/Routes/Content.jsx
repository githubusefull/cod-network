/* eslint-disable react/no-unescaped-entities */
import icon1 from "../Contents/Icons/icons-05.svg";
import icon2 from "../Contents/Icons/icons-04.svg";
import icon3 from "../Contents/Icons/icons-06.svg";
import icon4 from "../Contents/Icons/icons-09.svg";
import icon5 from "../Contents/Icons/icons-07.svg";
import icon6 from "../Contents/Icons/icons-10.svg";
import icon7 from "../Contents/Icons/icons-08.svg";

const Content = () => {
  const skills = [
    { id: 7, src: icon7, title: " التخزين و الإيفاء بالطلبات", style: "shadow-orange-500" },
    { id: 6, src: icon4, title: "التعليب", style: "shadow-orange-500" },
    { id: 2, src: icon5, title: " خدمة الدروبشيبينغ", style: "shadow-blue-500" },
    { id: 3, src: icon6, title: "البيع بالجملة", style: "shadow-yellow-500" },
    {
      id: 4,
      src: icon1,
      title: "التلفيف والتغليف",
      style: "shadow-yellow-500",
    },
    { id: 5, src: icon3, title: "تأكيد الطلبيات", style: "shadow-yellow-500" },
    { id: 1, src: icon2, title: "الاستراد", style: "shadow-yellow-500" },
  ];

  return (
    <div>
      <div className="bg-white w-auto h-full mx-5 mt-10  font-[600] rounded-lg p-10">
        <div className="flex justify-center text-1xl font-[500] text-black">
          <span className="font-[800] text-[30px] mt-20 text-center">
            خدماتنا
          </span>
        </div>
      </div>

      <div className="flex justify-center text-1xl mt-10 font-[500] text-black">
        <span className="text-center text-black text-[20px] font-[600]">
        دع خدمات <span className="text-orange">جملة ماروك</span> تحقق أهدافك وتلبي متطلباتك 
        </span>
      </div>

      <div className="max-w-screen-lg mx-auto  mt-14 flex flex-col justify-center h-full text-white">
        <div className="w-full grid grid-cols-1 sm:grid-cols-7 gap-8  text-center px-10 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`hover:scale-105 duration-500 rounded-lg ${style} `}
            >
              <img src={src} alt="" className="w-30 h-15 mx-auto" />
              <p className="text-[15px] font-[700]  text-black">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
