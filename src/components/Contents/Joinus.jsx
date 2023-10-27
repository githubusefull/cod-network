
const Joinus = () => {
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
    <div className="mx-20">
      <div className="bg-white p-10 h-full  mt-10 font-[600] rounded-t-lg ">
        <div className="flex justify-center text-center p-8 font-[500] text-black">
          <div className="text-cente">
            <span className="font-[800] text-center text-4xl">
              Join us today!
            </span>
            <p className="text-center text-1xl text-gray-800 mt-5 font-[600]">
              You can join us today by choosing the model that suits you.
              <br></br> We offer both Seller and Affiliate models.
            </p>

            <div className="w-full mt-20">
              <div className="max-w-screen-lg mx-auto p-10 flex flex-col justify-center h-full text-white">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8  text-center px-10 sm:px-0">
                  {join.map(({ id, src, title, style, btn }) => (
                    <div
                      key={id}
                      className={`hover:scale-105 duration-500 rounded-lg ${style}`}
                    >
                      <img src={src} alt="" className="w-[200px] mx-auto" />
                      <p className="mt-2 p-10 text-gray-500">{title}</p>
                      <button className="h-[50px]  px-6 btn rounded-[50px] shadow-md  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-140  duration-300 ">
                <span className="text-white text-[15px] px-8  font-[700]">
                  {btn}
                </span>
              </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Joinus
