
function Testimonial() {
  return (
    <div className="px-8">
      <div>
        <div className="text-xs xs:text-base sm:text-lg md:text-xl lg:text-[26px] xl:text-3xl text-center font-bold">
          Testimonials
        </div>

        <div className='border bg-[#97FCA1]'>
          <div className="text-[4px] xs:text-[5px] sm:text-[6px] md:text-[8px] lg:text-xs xl:text-sm font-normal text-[#0F0450]">
            "I've been using Kiteza for the past six months and I couldn't be happier. As a farmer, it can be challenging to find the right buyers for my produce, but [Marketplace Name] has made it so easy to connect with buyers and sell my products. I've been able to increase my revenue and expand my business thanks to the platform. I highly recommend Kiteza to any farmer looking to grow their business."
          </div>

          <div>
            <img src="./img/home/farmer.png" alt="" className="w-[17px] xs:w-[20px] sm:w-[31px] md:w-[34px] lg:w-[65px] " />

            <p className="text-[8px] xs:text-[10px] sm:text-xs lg:text-base text-[#0F0450] font-semibold">
              Peter Brown, Farmer
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial