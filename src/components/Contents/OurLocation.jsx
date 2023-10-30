/* eslint-disable react/no-unescaped-entities */
const OurLocation = () => {
  return (
   
    <div>    
<div className='w-full grid grid-cols-1 sm:grid-cols-2  gap-2 text-center py-8  sm:px-0'>
   <div className={` hover:scale-105 duration-500  rounded-lg p-8`}>

<div className="justify-center mt-1 text-4xl font-[500] text-black p-10">
          <span className="font-[800] text-center">
          Nos Localisations
          </span>
          </div>
          <div>
          <p className=' text-black text-[16px] p-5 font-[600]'>Nos services en pleine croissance permettent une livraison plus rapide et des délais de transit plus courts</p>
   <p className='text-gray-500 text-[15px] px-5 font-[600]'>.
   Notre entreprise se distingue par son engagement envers l'excellence dans son domaine,<br></br> sa capacité à gérer des opérations complexes et son dévouement à la satisfaction de sa clientèle.
   </p>
  </div>
  <div className="justify-center mt-1 text-1xl font-[500] hover:scale-105 duration-500  text-orange cursor-pointer p-10">
          <span className="font-[800] text-center ">
          Démarrer Maintenant
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
