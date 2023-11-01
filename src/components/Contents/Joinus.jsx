/* eslint-disable react/no-unescaped-entities */
import Seller from './seller.jpeg';

const Joinus = () => {
   
  return (
    <div className="mx-5">
      <div className="bg-white p-10 h-full  mt-10 font-[600] rounded-t-lg ">
      <div className='w-full grid grid-cols-1 sm:grid-cols-1  gap-2 text-center py-8  sm:px-0 my-4'>
  
  <div className={` hover:scale-105 duration-500  rounded-lg p-10 `}>

 <img src={Seller} className='w-[900px] m-3 mx-auto'/>
               
</div> 
</div>

       
      </div>
    </div>
  );
}

export default Joinus
