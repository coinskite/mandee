
const list = [
  {
    key : '1',
    src : '',
    title : 'Product Listing and Management tools',
    para :'Farmers and business people can easily list their agricultural products, manage their inventory, and track orders. It streamlines the selling process and makes it more efficient.',
  },
  {
    key : '2',
    src : '',
    title : 'Real time market data',
    para :'With our real-time price aggregator for paddy and maize, buyers can easily track the current market prices, make informed purchasing decisions,and get the best value for their money',
  },
  {
    key: '3',
    src : '',
    title : 'Secure and transparent payment processing',
    para :'A secure and transparent payment processing system can help establish trust and credibility with both farmers and buyers, ensuring timely and reliable transactions, and enhancing overall user experience.',
  },
  {
    key: '4',
    src : '',
    title : 'Analytics and insights',
    para :'Providing valuable data and information about sales, customer behavior, and market trends. This can inform strategic decision-making and help optimize the platform for better performance and user experience.',
  },

]

function Technical() {
  return (
    <div className="">
      {
        list.map(l => (
          <div key = {l.key}>
            <img src="" alt="" />

            <div>
              <p className="">
                {l.title}
              </p>

              <div>
               {
                l.para
               }
              </div>

            </div>
          </div>
            ))
      }
    </div>
  )
}

export default Technical