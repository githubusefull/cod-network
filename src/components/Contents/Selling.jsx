
const Selling = () => {
    const join = [
        { id: 1, src: "https://cod.network/portal-assets/img/seller.svg",
         title:'Start selling your own products and goods in multiple countries in MENA region by taking advantage of our services.',
          style:'shadow-orange-500',
          btn:'Get Started'
        
        },
        { id: 2, src: "https://cod.network/portal-assets/img/affiliate.svg",
         title:'Promote different offers and products listed on our platform and receive important commissions.',
          style:'shadow-blue-500',
          btn:'Learn More'
        },
       
     
     
     ]
  return (
  
          
<div className='w-full grid grid-cols-2 sm:grid-cols-2  gap-2 text-center py-8  sm:px-0 my-4'>
  {join.map(({id, src, btn, title, style}) => (
   <div key={id}
   className={` hover:scale-105 duration-500 py-2 rounded-lg  ${style}`}>

  <img src={src} className='w-[305px] m-3 mx-auto p-10'/>
   <p className='px-10 fon mx-4 text-gray-500 text-[15px]  font-[700]'>{title}</p>
   <div className="mt-8 justify-center flex">
              <button className="h-[50px] text-white text-[15px] px-8 font-[700] btn rounded-[50px] shadow-md  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-140  duration-300 ">
            {btn}
              </button>
            </div>
</div> 
  ))}
</div> 

  )
}

export default Selling
