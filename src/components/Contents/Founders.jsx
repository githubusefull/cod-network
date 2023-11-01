import person from './person.png'
const Founders = () => {
    const skills = [
        { id: 1, src: person, name:'Mr....', style:'shadow-orange', t:'CMO'},
        { id: 2, src: person, name:'Mr.....', style:'shadow-orange', t:'CEO'},
        { id: 3, src: person, name:'Mr.....', style:'shadow-orange', t:'CSO'},
        { id: 4, src: person, name:'Mr.....', style:'shadow-orange', t:'COO'},
       
     
     
     ]
  return (
    <div>
       <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className='mt-20'>
        <div className="justify-center mt-1 font-[500] text-center text-black p-4">
          <span className="w-6 h-6 bg-orange text-[18px] px-5 p-1 rounded-[5px] font-[700] text-white">
          جملة ماروك
          </span>
          </div> 
          <div className="justify-center text-4xl font-[500] text-center text-black">
          <span className="font-[800]">
          المؤسسين
          </span>
          </div> 
           <div className='w-full grid grid-cols-1 cursor-pointer sm:grid-cols-4  gap-4 text-center py-8 px-12 sm:px-0 my-4'>
  {skills.map(({id, src, name, style, t}) => (
   <div key={id}
   className={`shadow-md hover:scale-105  font-[200] m-3 duration-500 rounded-lg p-4 ${style}`}>

  <img src={src} alt='' className='w-17 h-15'/>
  <div className="mt-8 m-1 inline-flex">
  <p className='text-black  text-center font-[700]'>{name}</p>
  </div>
  <div className="mt-2 m-1">
  <p className='text-orange  text-center font-[800]'>{t}</p>
  </div>
  
</div> 
  ))}
 
        </div>
      </div>
    </div>
   
    
      
     
      <div className="mt-10 justify-center flex">
      <p className="text-[20px] font-[700]">يمكنك الإنضمام لنا <span className="text-orange cursor-pointer">الآن</span></p>
          </div>
      </div>
      
      
  )
}

export default Founders
