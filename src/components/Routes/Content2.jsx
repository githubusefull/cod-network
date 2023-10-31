const Content2 = () => {
    const skills = [
      { id: 1, src: "https://cod.network/portal-assets/img/icons/solid/1.svg?v=1.0.0", title:'الاستراد', style:'shadow-orange-500'},
      { id: 2, src: "https://cod.network/portal-assets/img/icons/solid/2.svg?v=1.0.0", title:'التلفيف', style:'shadow-blue-500'},
      { id: 3, src: "https://cod.network/portal-assets/img/icons/solid/3.svg?v=1.0.0", title:'مركز الإتصال', style:'shadow-yellow-500'},
      { id: 4, src: "https://cod.network/portal-assets/img/icons/solid/4.svg?v=1.0.0", title:'التخزين', style:'shadow-yellow-500'},
      { id: 5, src: "https://cod.network/portal-assets/img/icons/solid/5.svg?v=1.0.0", title:'التوصيل', style:'shadow-yellow-500'},
      { id: 6, src: "https://cod.network/portal-assets/img/icons/solid/6.svg?v=1.0.0", title:'تحصيل الاموال', style:'shadow-yellow-500'},
  
   
   
   ]
    return (
      <div>
        <div className="bg-white w-auto h-full mx-5 mt-10  font-[600] rounded-lg">
          <div className="flex justify-center p-10  mt-10 text-4xl font-[500] text-black">
            
          </div>
          <div className="flex justify-center text-1xl font-[500] text-black">
            <span className="font-[600] text-[30px]  text-center">
             <span className="text-orange">حُلول وخدمات </span>    
                جملة ماروك<br></br>
            </span>  
          </div>
          <div className="flex justify-center text-1xl mt-8 font-[500] text-black">
            <span className="font-[400] text-[20px]  text-center">
                نمكن التجار عبر الأنترنت الإستفادة من حلول عديدة بدءا من الاستيراد حتى تحصيل الأموال
            </span>
  
            
          </div>
        </div>
  
        <div className="w-full">
          <div className="max-w-screen-lg mx-auto p-10 flex flex-col justify-center h-full text-white">
            <div className="w-full grid grid-cols-1 sm:grid-cols-6 gap-8  text-center px-10 sm:px-0">
              {skills.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`hover:scale-105 duration-500 rounded-lg ${style}`}
                >
                  <img src={src} alt="" className="w-20 h-15 mx-auto" />
                  <p className="mt-4 text-gray-500">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 justify-center flex">
          <button className="h-[50px]  px-6 btn rounded-[50px] shadow-md  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-140  duration-300 ">
            <span className="text-white text-[17px] px-8  font-[700]">
            ابدأ الآن  
            </span>
          </button>
        </div>
      </div>
    );
  }
  
  export default Content2