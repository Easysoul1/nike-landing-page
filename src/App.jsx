import Hero from './sections/Hero';
import Footer from './sections/Footer';
import CustomerReviews from './sections/CustomerReviews';
import Services from './sections/Services';
import SpecialOffers from './sections/SpecialOffers';
import Subscriber from './sections/Subscriber';
import Nav from './component/Nav';
import PopularProducts from './sections/PopularProducts';
import SuperQuality from './sections/SuperQuality';


const App = () => (
  <main className="relative">
    <Nav/>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProducts/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-9">
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffers/>
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews/>
    </section>
    <section className='mt-9 mb-11'>
      <Subscriber/>
    </section>
    <section >
      <Footer/>
    </section>
  </main>

);

export default App;