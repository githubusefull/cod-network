
const Founders = () => {
    const skills = [
        { id: 1, src: "https://cod.network/portal-assets/img/1.png", name:'Mr.Raki Benchaou', style:'shadow-orange', t:'CMO'},
        { id: 2, src: "https://cod.network/portal-assets/img/4.png", name:'Mr.Mohamed Id Yahia', style:'shadow-orange', t:'CEO'},
        { id: 3, src: "https://cod.network/portal-assets/img/3.png", name:'Mr.Mohamed Baabit', style:'shadow-orange', t:'CSO'},
        { id: 4, src: "https://cod.network/portal-assets/img/2.png", name:'Mr.Hamza Abu AL Izz', style:'shadow-orange', t:'COO'},
       
     
     
     ]
  return (
    <div>
       <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className='mt-20'>
        <div className="justify-center mt-1 font-[500] text-center text-black p-4">
          <span className="w-6 h-6 bg-orange text-[15px] px-2 p-1 rounded-[5px] font-[700] text-white">
          COD NETWORK
          </span>
          </div> 
          <div className="justify-center text-4xl font-[500] text-center text-black">
          <span className="font-[800]">
         Founders
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
   
    <div className="mt-8 justify-center flex">
    <button className="h-[50px]   btn rounded-[50px] shadow-md text-white text-[15px] px-8  font-[700]  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-140  duration-300 ">
              Our Services
              </button>
    </div>
      
     
      <div className="mt-10 justify-center flex">
      <p className="text-[16px] font-[700]">Want to join us? <span className="text-orange">Get Started</span></p>
          </div>
      </div>
      
      
  )
}

export default Founders
