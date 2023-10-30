import {BsArrowRight} from 'react-icons/bs'
const OurservicesCard = () => {
    const skills = [
        { id: 1, src: "https://cod.network/portal-assets/img/icons/solid/1.svg?v=1.0.0", title:'Sourcing', style:'shadow-orange'},
        { id: 2, src: "https://cod.network/portal-assets/img/icons/solid/2.svg?v=1.0.0", title:'Fulfillment', style:'shadow-blue-500'},
        { id: 3, src: "https://cod.network/portal-assets/img/icons/solid/3.svg?v=1.0.0", title:'Call-Center', style:'shadow-yellow-500'},
        { id: 4, src: "https://cod.network/portal-assets/img/icons/solid/4.svg?v=1.0.0", title:'Warehousing', style:'shadow-yellow-500'},
        { id: 5, src: "https://cod.network/portal-assets/img/icons/solid/5.svg?v=1.0.0", title:'Shipping', style:'shadow-yellow-500'},
        { id: 6, src: "https://cod.network/portal-assets/img/icons/solid/6.svg?v=1.0.0", title:'Remittance', style:'shadow-yellow-500'},
    
     
     
     ]
  return (
    <div>
       <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className='mt-20'>  
           <div className='w-full grid grid-cols-1 cursor-pointer sm:grid-cols-2  gap-8 text-center py-8 px-12 sm:px-0 my-4'>
  {skills.map(({id, src, title}) => (
   <div key={id}
   className={`outline hover:md:outline-none scale-105 font-[200] m-3 duration-500 rounded-lg  inline-flex`}>

  <img src={src} alt='' className='w-17 h-15 p-1 m-2'/>
  <div className="mt-8 m-1 inline-flex">
  <p className='text-black hidden md:block text-center font-[700]'>{title}</p>
  <p className='text-black md:hidden text-[12px]  mt-1 text-center font-[700]'>{title}</p>

  <BsArrowRight fontSize={30}  className='hidden md:block text-orange  ml-20'/>

  <BsArrowRight fontSize={30}  className='md:hidden text-orange ml-1'/>

  </div>
  
</div> 
  ))}
 
        </div>
      </div>
    </div>
   
    <div className="mt-8 justify-center flex">
    <button className="h-[50px]   btn rounded-[50px] shadow-md text-white text-[15px] px-8  font-[700]  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-140  duration-300 ">
    Nos Services
              </button>
    </div>
      
     
      <div className="mt-10 justify-center flex">
      <p className="text-[16px] font-[700]">Tu peux nous rejoindre? <span className="text-orange">Démarrer</span></p>
          </div>
      </div>
      
      
  )
}

export default OurservicesCard
