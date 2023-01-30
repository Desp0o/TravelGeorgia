import {Routes,Route} from "react-router-dom";


import Main from "./Main";
import OneDayTours from "./pages/oneDayTours/oneDayTours";
import AllTours from "./pages/allTours/allTours";

// oneday Inner
import OldTbilisi from './pages/oneDayTours/oneDayInner/oldTbilisi_Inner'
import McxetaInner from "./pages/oneDayTours/oneDayInner/mcxeta_inner";
import KakhetiOneDay from './pages/oneDayTours/oneDayInner/kakheti_inner'


function App() {
  return (
    <div className="App overflow-x-hidden">
      <Routes>
        <Route exact path="*" element={<Main />} />
        <Route exact path="/pages/oneDayTours/oneDayTours" element={<OneDayTours />} />
        <Route exact path="/pages/allTours/allTours" element={<AllTours />} />

        {/* oneday Inner */}
        <Route exact path="/pages/oneDayTours/oneDayInner/oldTbilisi_Inner" element={<OldTbilisi />} />
        <Route exact path="/pages/oneDayTours/oneDayInner/mcxeta_inner" element={<McxetaInner />} />
        <Route exact path="/pages/oneDayTours/oneDayInner/kakheti_inner" element={<KakhetiOneDay />} />
      </Routes>
    </div>
  );
}

export default App;
