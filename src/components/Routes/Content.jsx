/* eslint-disable react/no-unescaped-entities */

const Content = () => {
  const skills = [
    { id: 1, src: "https://cod.network/portal-assets/img/icons/solid/1.svg?v=1.0.0", title:'Sourcing', style:'shadow-orange-500'},
    { id: 2, src: "https://cod.network/portal-assets/img/icons/solid/2.svg?v=1.0.0", title:'Fulfillment', style:'shadow-blue-500'},
    { id: 3, src: "https://cod.network/portal-assets/img/icons/solid/3.svg?v=1.0.0", title:'Call-Center', style:'shadow-yellow-500'},
    { id: 4, src: "https://cod.network/portal-assets/img/icons/solid/4.svg?v=1.0.0", title:'Warehousing', style:'shadow-yellow-500'},
    { id: 5, src: "https://cod.network/portal-assets/img/icons/solid/5.svg?v=1.0.0", title:'Shipping', style:'shadow-yellow-500'},
    { id: 6, src: "https://cod.network/portal-assets/img/icons/solid/6.svg?v=1.0.0", title:'Remittance', style:'shadow-yellow-500'},

 
 
 ]
  return (
    <div>
      <div className="bg-white w-auto h-full mx-5 mt-10  font-[600] rounded-lg">
        <div className="flex justify-center p-10  mt-10 text-4xl font-[500] text-black">
          <span className="font-[800] growandscale mt-8">JUMLA MAROC</span>
        </div>
        <div className="flex justify-center text-1xl font-[500] text-black">
          <span className="font-[600]  text-center">
            <span className="growandscale">Jumla Maroc </span>est plus qu'un
            simple service de vente en gros,<br></br> c'est votre principal
            partenaire pour la fourniture de grandes quantités <br></br>
            de produits et de marchandises. Nous sommes là pour comprendre les
            besoins <br></br> de votre entreprise et simplifier vos opérations.
            Que vous recherchiez des produits <br></br>de qualité à distribuer,
            des consommables ou des matériaux indispensables à <br></br> votre
            production Vente en Gros Diversité de Produits Réseau de
            Fournisseurs<br></br> Étendu Expertise en Négociation
          </span>
        </div>
      </div>

      <div className="w-full">
        <div className="max-w-screen-lg mx-auto p-10 flex flex-col justify-center h-full text-white">
          <div className="w-full grid grid-cols-1 sm:grid-cols-6 gap-8  text-center px-10 sm:px-0">
            {skills.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`hover:scale-105 duration-500 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 h-15 mx-auto" />
                <p className="mt-4 text-gray-500">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 justify-center flex">
        <button className="h-[50px]  px-6 btn rounded-[50px] shadow-md  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-140  duration-300 ">
          <span className="text-white text-[15px] px-8  font-[700]">
            Démarrer Maintenant
          </span>
        </button>
      </div>
    </div>
  );
}

export default Content
