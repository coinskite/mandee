import Testimonial from './Testimonial';
import Technical from './Technical';
import Features from './Features';
import Benefits from './Benefits';
import Address from './Address';
import Header from './Header';
import Press from './Press';

function Home() {
  return (
    <>
      <Header />
      <Features />
      <Benefits />
      <Technical />
      <Testimonial />
      <Press />
      <Address />
    </>
  )
}

export default Home