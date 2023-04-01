import Tn from '../../svg/map/Tn.svg';

function Final() {
  return (
    <div className="dfc items-center p-6 text-center">
      <p className="underline underline-offset-4 decoration-[#00AA21] decoration-2">Commodities prices by District wise</p>
      <p>Click on a district for a detailed price</p>
      <Tn className="w-60 h-96" />
    </div>
  )
}

export default Final