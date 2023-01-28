import FirstScreen from "./components/firstScreen/firstScreen";
import Navbar from "./components/navbar/Navbar";
import ToursSection from "./components/toursSection/toursSection";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar />
      <FirstScreen />
      <ToursSection />
    </div>
  );
}

export default App;
