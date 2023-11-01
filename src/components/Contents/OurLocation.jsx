/* eslint-disable react/no-unescaped-entities */
const OurLocation = () => {
  return (
   
    <div>    
<div className='w-full grid grid-cols-1 sm:grid-cols-2  gap-2 text-center py-8  sm:px-0'>
   <div className={` hover:scale-105 duration-500  rounded-lg p-8`}>

<div className="justify-center mt-1 text-4xl font-[500] text-black p-10">
          <span className="font-[800] text-center">
          مواقعنا
          </span>
          </div>
          <div>
          <p className=' text-black text-[20px] p-5 font-[600]'>نمكن من استعمال مستودعاتنا في العديد من الدول لتطوير وتوسيع أعمالك</p>
   <p className='text-gray-500 text-[16px] px-5 font-[600]'>نأمن أن توفير مستودعات في معظم مدن الدولة يعني التسليم السريع والمزيد من الربح لعملائنا
   </p>
  </div>
  <div className="justify-center mt-1 text-1xl font-[500] hover:scale-105 duration-500  text-orange cursor-pointer p-10">
  <button className="h-[40px] text-white text-[18px] font-[600] px-8  btn rounded-[50px] shadow-md  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-140  duration-300 ">
              ابدأ خطوتك الأولى
              </button>
          </div>
</div> 





<div className={` hover:scale-105 duration-500  rounded-lg p-10 `}>

  <img src='https://cod.network/portal-assets/img/our_locations.png' className='w-[400px]  mx-auto'/>
</div> 




</div> 

</div> 
  );
};

export default OurLocation;
