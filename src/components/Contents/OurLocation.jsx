const OurLocation = () => {
  return (
   
    <div>    
<div className='w-full grid grid-cols-1 sm:grid-cols-2  gap-2 text-center py-8  sm:px-0'>
   <div className={` hover:scale-105 duration-500  rounded-lg p-8`}>

<div className="justify-center mt-1 text-4xl font-[500] text-black p-10">
          <span className="font-[800] text-center">
          Our Locations
          </span>
          </div>
          <div>
          <p className=' text-black text-[16px] p-5 font-[600]'>Our growing network of services allows for faster delivery and shorter transit times</p>
   <p className='text-gray-500 text-[15px] px-5 font-[600]'>With COD NETWORK Growing Warehouse Network and seamless integrations, we help you reach your customers quickly, effectively, and affordably. Expand your business and distribute your inventory in strategically located warehouses spanning four continents and more than 9 countries.</p>
  </div>
  <div className="justify-center mt-1 text-1xl font-[500] hover:scale-105 duration-500  text-orange cursor-pointer p-10">
          <span className="font-[800] text-center ">
          Start Now
          </span>
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
