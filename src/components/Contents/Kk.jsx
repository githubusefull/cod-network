
const Kk = () => {
    const skills = [
        { id: 1, src: "+100K", title:'عميل أرض', text:'هدفنا الأساسي هو تقديم خدمات بأعلى جودة لعملائنا', style:'shadow-orange'},
        { id: 2, src: "+1K", title:'طلبية كل يوم', text:'لدينا قدرة تسليم كبيرة ونعمل بسرعة', style:'shadow-orange'},
        { id: 3, src: "+8", title:'مستودعات', text:'نحن نعمل من خلال مستودعاتنا الخاصة في غالبية المدن داخل البلدان التي نخدمها', style:'shadow-orange'},
        { id: 4, src: "+3", title:'بلدان', text:'معًا: يمكننا النمو والوصول إلى المزيد من البلدان', style:'shadow-orange'},

     
     
     ]
  return (
    <div>
       <div className='max-w-screen-lg mx-auto  flex flex-col justify-center w-full h-full text-white'>
        <div className='mt-0'>
       
          <div className="justify-center text-4xl font-[500] text-center text-black">
          <span className="font-[800]">
          </span>
          </div> 
           <div className='w-full  grid grid-cols-2 cursor-pointer sm:grid-cols-4  gap-4 text-center py-8 px-12 sm:px-0 my-4'>
  {skills.map(({id, src, title, text }) => (
   <div key={id}
   className={`hover:scale-105  font-[200] m-3  duration-500 rounded-lg`}>

  <p className="text-5xl text-orange font-[700]">{src}</p>
 
  <div className="mt-8 m-1 inline-flex">
  <p className='text-black text-[25px]  text-center font-[800]'>{title}</p>
  </div>
  <div className="mt-2 m-1 inline-flex">
  <p className='text-black text-[15px] text-center font-[600]'>{text}</p>
  </div>
  
</div> 
  ))}
 
        </div>
      </div>
    </div>
   
      </div>
      
      
  )
}

export default Kk;