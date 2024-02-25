import {Hero, PopularProducts, SpecialOffers, Footer, Subscribe, SuperQuality, Service, CostumerReviews} from './sections';
import Nav from './components/Nav';
const App = () => (
  <main className="relative">
     <Nav> </Nav> 
    <section className="xl:padding-1 wide:padding-r padding-b ">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Service />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="padding bg-pale-blue">
      <CostumerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="padding-x padding-t bg-black pb-8">
      <Footer />
    </section>
  </main>
);

export default App;