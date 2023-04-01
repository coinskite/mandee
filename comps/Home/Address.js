
const list = [
  {
    key: '1',
    title: 'COMPANY',
    list: [
      "About coinskite",
      "Career",
      "Contact",
      "Work",
      "Insights",
    ]
  },
  {
    key: '2',
    list: [
      "6th Floor, Nizara Bonanza,",
      "Door No:813, Anna Salai,",
      "Chennai,India",
    ]
  }
]

function Address() {
  return (
    <div>
      <div>

        <div className="text-[] text-[#0F0450]">
        Our Offices
        </div>

        <div className="text-[#0F0450]">
        Although we’re a remote-first 
company, we also have office at 
        </div>

        <div>
          <img src="" alt="" className=""/>
        </div>

        <div>
      {
        list.map(l => (
          <div key={l.key}>
            <div>

              <p className="text-[#0F0450]">
                {l.title}
              </p>

              <ul>
                {
                  l.list.map((p,i) => (
                    <li key={i}>{p}</li>
                  ))
                }
              </ul>
              
            </div>
          </div>
        ))
      }
        </div>
      </div>
    </div>
  )
}

export default Address