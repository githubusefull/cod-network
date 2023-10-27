const Ready = () => {
  return (
    <div className="mx-0">
      <div className="bg-white p-10 h-full  font-[600] rounded-t-lg ">
        <div className="flex justify-center text-center p-8 font-[500] text-black">
          <div className="text-cente">
            <span className="font-[800] text-center text-4xl">
              Ready to get started?
            </span>
            <p className="text-center text-1xl text-gray-800 mt-5 font-[600]">
              Get in touch now with our customer service representive for more
              details.<br></br> Request more informations about our services for
              your business needs.
            </p>

            <div className="mt-8 justify-center flex">
              <button className="h-[50px] text-white text-[15px] px-8  font-[700] btn rounded-[50px] shadow-md  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-140  duration-300 ">
            Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ready;
