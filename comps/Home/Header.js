function Header() {
  return (
    <div className='p-6 text-center'>
      <div className="max-w-7xl mx-auto">
        <h1 className='text-sm xs:text-lg sm:text-[22px] lg:text-3xl xl:text-4xl text-[#0F0450] font-bold'>
          Buy and Sell Paddy and Maize Directly from Farmers in Tamilnadu
        </h1>

        <p className='mt-1 mb-2 text-[6px] sm:text-[8px] lg:text-[10px] xl:text-sm text-[#0F0450] font-medium'>
          Our marketplace makes it easy for farmers to sell their produce directly to consumers
          and businesses, while providing access to real-time market data and access to a wide market of
          buyers/business people in Tamilnadu.
        </p>

        <button className='px-3 py-1.5 text-[10px] md:text-xs sm:text-[10px] xs:text-xs lg:text-base text-[#ffff] bg-[#22C954] font-medium rounded'>
          Know more
        </button>

        <div className='w-1/2 mx-auto'>
          <img src="./img/home/header.png" alt="" className="w-[192px] xs:w-[236] sm:w-[323px] md:w-[281px] lg:w-[371px] xl:w-[509px]" />
        </div>
      </div>
    </div>
  )
}

export default Header