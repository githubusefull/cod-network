/* eslint-disable react/no-unescaped-entities */
const Ready = () => {
  return (
    <div className="mx-0">
      <div className="bg-white p-10 h-full  font-[600] rounded-t-lg ">
        <div className="flex justify-center text-center p-8 font-[500] text-black">
          <div className="text-cente">
            <span className="font-[800] text-center text-4xl">
            Prêt à démarrer?
            </span>
            <p className="text-center text-1xl text-gray-800 mt-5 font-[600]">
              Entrez en contact dès maintenant avec notre représentant<br></br>{" "}
              du service client pour plus de détails. Demandez plus<br></br>
              d'informations sur nos services pour vos besoins professionnels.
            </p>

            <div className="mt-8 justify-center flex">
              <button className="h-[50px] text-white text-[15px] px-8  font-[700] btn rounded-[50px] shadow-md  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-140  duration-300 ">
              Démarrer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ready;
