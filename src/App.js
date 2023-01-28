import FirstScreen from "./components/firstScreen/firstScreen";
import Navbar from "./components/navbar/Navbar";
import PopularDestinaton from "./components/popularDestinaton/popularDestinaton";
import ToursSection from "./components/toursSection/toursSection";
import BookFlight from "./components/bookFlights/bookFlight";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar />
      <FirstScreen />
      <ToursSection />
      <PopularDestinaton />
      <BookFlight />
    </div>
  );
}

export default App;
