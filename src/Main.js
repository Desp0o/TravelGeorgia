import FirstScreen from "./components/firstScreen/firstScreen";
import Navbar from "./components/navbar/Navbar";
import PopularDestinaton from "./components/popularDestinaton/popularDestinaton";
import ToursSection from "./components/toursSection/toursSection";
import BookFlight from "./components/bookFlights/bookFlight";
import WhyUs from "./components/whyUs/whyUs";
import Footer from "./components/Footer/Footer";

function Main() {
  return (
    <div>
      <Navbar homePage='*' />
      <FirstScreen />
      <ToursSection />
      <PopularDestinaton />
      <WhyUs />
      <BookFlight />
      <Footer />
    </div>
  );
}

export default Main;
