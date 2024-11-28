import Feature from "./Home/Feature";
import Hero from "./Home/Hero";
import Newsletter from "./Home/Newsletter";
import Service from "./Home/Service";
import Stats from "./Home/Stats";
import Testimonials from "./Home/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Service />
      <Stats />
      <Testimonials />
      <Newsletter />
    </>
  );
}

export default Home;
