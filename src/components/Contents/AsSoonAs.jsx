import Simo from './simolife.png'

const AsSoonAs = () => {
    const skills = [
        { id: 1, src: "https://cod.network/portal-assets/img/brands/sky-news-arabia.svg", name:'Mr.Raki Benchaou', style:'shadow-orange', t:'CMO'},
        { id: 2, src: "https://cod.network/portal-assets/img/brands/affiliate-morocco.svg", name:'Mr.Mohamed Id Yahia', style:'shadow-orange', t:'CEO'},
        { id: 3, src: "https://cod.network/portal-assets/img/brands/dir-labass.svg", name:'Mr.Mohamed Baabit', style:'shadow-orange', t:'CSO'},
        { id: 4, src: "https://cod.network/portal-assets/img/brands/ags.svg", name:'Mr.Hamza Abu AL Izz', style:'shadow-orange', t:'COO'},
        { id: 5, src: Simo, name:'Mr.Hamza Abu AL Izz', style:'shadow-orange', t:'COO'},

     
     
     ]
  return (
    <div>
       <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className='mt-0'>
       
          <div className="justify-center text-4xl font-[500] text-center text-black">
          <span className="font-[800]">
         As Seen As
          </span>
          </div> 
           <div className='w-full  grid grid-cols-2 cursor-pointer sm:grid-cols-5  gap-4 text-center py-8 px-12 sm:px-0 my-4'>
  {skills.map(({id, src, }) => (
   <div key={id}
   className={`hover:scale-105  font-[200] m-3 duration-500 rounded-lg p-4`}>

  <img src={src} alt='' className='h-9'/>
 
  
  
</div> 
  ))}
 
        </div>
      </div>
    </div>
   
      </div>
      
      
  )
}

export default AsSoonAs;
