const OurPartners = () => {
    const skills = [
        { id: 1, src: "https://cod.network/portal-assets/img/naqel.png", name:'Mr.Raki Benchaou', style:'shadow-orange', t:'CMO'},
        { id: 2, src: "https://cod.network/portal-assets/img/aramex.png", name:'Mr.Mohamed Id Yahia', style:'shadow-orange', t:'CEO'},
        { id: 3, src: "https://cod.network/portal-assets/img/dhl.png", name:'Mr.Mohamed Baabit', style:'shadow-orange', t:'CSO'},
        { id: 4, src: "https://cod.network/portal-assets/img/fedex.png", name:'Mr.Hamza Abu AL Izz', style:'shadow-orange', t:'COO'},
        { id: 5, src: "https://cod.network/portal-assets/img/ups.png", name:'Mr.Hamza Abu AL Izz', style:'shadow-orange', t:'COO'},

     
     
     ]
  return (
    <div>
       <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className='mt-20'>
       
          <div className="justify-center text-4xl font-[500] text-center text-black">
          <span className="font-[800]">
         Our Partners
          </span>
          </div> 
           <div className='w-full grid grid-cols-1 cursor-pointer sm:grid-cols-5  gap-4 text-center py-8 px-12 sm:px-0 my-4'>
  {skills.map(({id, src, }) => (
   <div key={id}
   className={`shadow-md hover:scale-105  font-[200] m-3 duration-500 rounded-lg p-4`}>

  <img src={src} alt='' className='w-17 h-15'/>
 
  
  
</div> 
  ))}
 
        </div>
      </div>
    </div>
   
      </div>
      
      
  )
}

export default OurPartners