const list = [
  {
    id: 1,
    src: "",
    title: 'Benefits for farmers',
    para: [
      "Direct access to a larger market",
      "Real-time market data and price tracking",
      "Elimination of middleman and transparent payment processing",
      "Access to analytics and insights",
    ]
  },
  {
    id: 2,
    src: "",
    title: 'Benefits for Buyers',
    para: [
      "Access to a wide range of high-quality agricultural products.",
      "Connect directly with farmers & Elimination of middleman",
      "Increased efficiency",
      "Streamlined procurement process",
    ]
  },
]

function Benefits() {
  return (
    <div className="p-4 text-[#0F0450] bg-[#97FCA1]">
      {
        list.map(l => (
          <div key={l.id}>
            <img src="" alt="" />

            <div>
              <p className="text-sm xs:text-base sm:text-xl md:text-2xl lg:text-[32px] xl:text-[40px] font-bold">
                {l.title}
              </p>

              <ul className="list-disc list-inside">
                {
                  l.para.map((p, i) => (
                    <li key={i}>
                      {p}
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Benefits