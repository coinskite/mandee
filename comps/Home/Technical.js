const list = [
  {
    key: '1',
    src: './img/home/technical/1.png',
    title: 'Product Listing and Management tools',
    para: 'Farmers and business people can easily list their agricultural products, manage their inventory, and track orders. It streamlines the selling process and makes it more efficient.',
  },
  {
    key: '2',
    src: './img/home/technical/2.png',
    title: 'Real time market data',
    para: 'With our real-time price aggregator for paddy and maize, buyers can easily track the current market prices, make informed purchasing decisions,and get the best value for their money',
  },
  {
    key: '3',
    src: './img/home/technical/3.png',
    title: 'Secure and transparent payment processing',
    para: 'A secure and transparent payment processing system can help establish trust and credibility with both farmers and buyers, ensuring timely and reliable transactions, and enhancing overall user experience.',
  },
  {
    key: '4',
    src: './img/home/technical/4.png',
    title: 'Analytics and insights',
    para: 'Providing valuable data and information about sales, customer behavior, and market trends. This can inform strategic decision-making and help optimize the platform for better performance and user experience.',
  },

]

function Technical() {
  return (
    <div className="px-8">
      <div className="">

        <p className="text-xs xs:text-base sm:text-lg md:text-[22px] lg:text-[26px] xl:text-3xl text-[#0F0450] font-bold">
          Technical Specifications
        </p>

        <div className="text-6px] xs:text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base font-normal">
          List of technical specifications of the platform and live price aggregator,including:
        </div>

        <div className="">
          {
            list.map(l => (
              <div key={l.key}>
                <img
                  src={l.src}
                  alt=""
                  className="w-8 xs:w-4 sm:w-4.5 md:w-8 lg:w-10 xl:w-12"
                />

                <div>
                  <p className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm lg:text-lg xl:text-[22px] text-[#0F0450]  font-bold">
                    {l.title}
                  </p>

                  <div className="text-[5px] xs:text-[6px] sm:text-[7px] md:text-[8px] lg:text-xs xl:text-sm text-[#0F0450] font-medium ">
                    {l.para}
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Technical