import {Routes,Route} from "react-router-dom";


import Main from "./Main";
import OneDayTours from "./pages/oneDayTours/oneDayTours";
import AllTours from "./pages/allTours/allTours";


function App() {
  return (
    <div className="App overflow-x-hidden">
      <Routes>
        <Route exact path="*" element={<Main />} />
        <Route exact path="/pages/oneDayTours/oneDayTours" element={<OneDayTours />} />
        <Route exact path="/pages/allTours/allTours" element={<AllTours />} />
      </Routes>
    </div>
  );
}

export default App;
