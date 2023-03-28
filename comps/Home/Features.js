const list = [
  {
    key: '1',
    src: "",
    title: "Direct access to markets",
  },
  {
    key: '2',
    src: "",
    title: "Buy & Sell",
  },
  {
    key: '3',
    src: "",
    title: "Order Management",
  },
  {
    key: '4',
    src: "",
    title: "Analytics",
  },
  {
    key: '5',
    src: "",
    title: "Real time market data",
  },
  {
    key: '6',
    src: "",
    title: "Secure payment",
  },
]

function Features() {
  return (
    <div className="p-6">
      <div>
        <h1 className='text-[30px] font-bold text-[#0F0450] text-center px-50 mt-6 '>
          Features
        </h1>

        <div className='text-[16px] font-normal text-center text-[#0F0450]'>
          our features are designed to streamline your shopping experience and help you find the products you need with ease.
        </div>

        <div className="grid justify-center sm:grid-cols-2 md:grid-cols-3 gap-2.5">
          {
            list.map(l => (
              <div
                key={l.key}
                className='df px-2.5 py-2 bg-[#84FF90] border-t rounded-[5px]'
              >
                <img src="" alt="" />

                <p className='text-[12px] font-bold'>
                  {l.title}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Features