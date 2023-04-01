
function Header() {
  return (
    <div className="p-6">
      <h1>
        Mandi Prices
      </h1>

      <div className="grid md:grid-cols-4 gap-4">
        <select className="border border-[#22C954] shadow-[0_4px_4px_0_#00000040]">
          <option value="" disabled>Select Commodity</option>
          <option value="Paddy">Paddy</option>
          <option value="Maize">Maize</option>
        </select>

        <select className="border border-[#22C954] shadow-[0_4px_4px_0_#00000040]">
          <option value="" disabled>Select State</option>
          <option value="Tamilnadu">Tamilnadu</option>
        </select>

        <select className="border border-[#22C954] shadow-[0_4px_4px_0_#00000040]">
          <option value="" disabled>Select Market</option>
          <option value="Alangeyam">Alangeyam</option>
          <option value="Andimadom">Andimadom</option>
          <option value="Annur">Annur</option>
          <option value="Anthiyur">Anthiyur</option>
        </select>

        <button className="bg-[#22C954] text-white">
          Search
        </button>
      </div>

      <div className="df gap-0 my-6 shadow-[1px_2px_7px_5px_#0000001A]">
        <img src="./img/price/mazie.png" alt="" />

        <div className="flex-1 text-center">
          <div className="df justify-around p-2 relative">
            <p className="absolute top-2 left-1/2 -translate-x-1/2">Market price summary In Theni</p>
            <p className="ml-auto">Last price updated : 08 Feb 23,12:00 am</p>
          </div>

          <div className="df justify-around p-2">
            <p>Best Market Price</p>
            <p>2380.00/Quintal</p>
          </div>

          <div className="df justify-around p-2">
            <p>Average Price</p>
            <p>2320/Quintal</p>
          </div>

          <div className="df justify-around p-2">
            <p>Lowest Market Price</p>
            <p>2260.00/Quintal</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header