import {Routes,Route} from "react-router-dom";


import Main from "./Main";
import OneDayTours from "./pages/oneDayTours/oneDayTours";
import AllTours from "./pages/allTours/allTours";

// oneday Inner
import OldTbilisi from './pages/oneDayTours/oneDayInner/oldTbilisi_Inner'
import McxetaInner from "./pages/oneDayTours/oneDayInner/mcxeta_inner";
import KakhetiOneDay from './pages/oneDayTours/oneDayInner/kakheti_inner'
import BorjomiOneDay from './pages/oneDayTours/oneDayInner/borjomi_inner'
import RabatOneDay from "./pages/oneDayTours/oneDayInner/rabati";
import UpliscixeOneDay from "./pages/oneDayTours/oneDayInner/upliscixe_inner";
import KazbegiOneDay from "./pages/oneDayTours/oneDayInner/kazbegi_inner";
import GarejiOneDay from "./pages/oneDayTours/oneDayInner/gareji_inner";

//ManyDaysTours
import ManyDaysTours from "./pages/manyDays/manyDays";
import ThreeDaysInner from "./pages/manyDays/manyDays_inner/threeDays_inner";
import FiveDaysInner from "./pages/manyDays/manyDays_inner/fiveDays_inner";
import SevenDaysInner from "./pages/manyDays/manyDays_inner/sevenDays_inner";
import TenDaysInner from "./pages/manyDays/manyDays_inner/svaneti_inner";
import BatumiInner from "./pages/manyDays/manyDays_inner/batumi_inner";
import KakhetiInner from "./pages/manyDays/manyDays_inner/kakheti_inner";

//fishing
import FishingInner from "./pages/fishing/fishing";

//rafting
import RaftingInner from "./pages/rafting/rafting_inner";

//celebrations
import CelebrationInner from "./pages/celebration/celebration";

//hiking
import HikingInner from "./pages/hiking/hiking_inner";

//church
import ChurchInner from "./pages/church/church_inner";

//georgias
import ForGeorgians from "./pages/forGeorgians/forGeorgians";

//about us
import AboutUs from "./pages/aboutUs/aboutUs";

//Services
import Services from "./pages/uslugi/uslugi";

function App() {
  return (
    
      <Routes>
        <Route exact path="*" element={<Main />} />
        <Route exact path="/pages/oneDayTours/oneDayTours" element={<OneDayTours />} />
        <Route exact path="/pages/allTours/allTours" element={<AllTours />} />

        {/* oneday Inner */}
        <Route exact path="/pages/oneDayTours/oneDayInner/oldTbilisi_Inner" element={<OldTbilisi />} />
        <Route exact path="/pages/oneDayTours/oneDayInner/mcxeta_inner" element={<McxetaInner />} />
        <Route exact path="/pages/oneDayTours/oneDayInner/kakheti_inner" element={<KakhetiOneDay />} />
        <Route exact path="/pages/oneDayTours/oneDayInner/borjomi_inner" element={<BorjomiOneDay />} />
        <Route exact path="/pages/oneDayTours/oneDayInner/rabati" element={<RabatOneDay />} />
        <Route exact path="/pages/oneDayTours/oneDayInner/upliscixe_inner" element={<UpliscixeOneDay />} />
        <Route exact path="/pages/oneDayTours/oneDayInner/kazbegi_inner" element={<KazbegiOneDay />} />
        <Route exact path="/pages/oneDayTours/oneDayInner/gareji_inner" element={<GarejiOneDay />} />

        {/* many days */}
        <Route exact path="/pages/manyDays/manyDays" element={<ManyDaysTours />} />
        <Route exact path="/pages/manyDays/manyDays_inner/threeDays_inner" element={<ThreeDaysInner />} />
        <Route exact path="/pages/manyDays/manyDays_inner/fiveDays_inner" element={<FiveDaysInner />} />
        <Route exact path="/pages/manyDays/manyDays_inner/sevenDays_inner" element={<SevenDaysInner />} />
        <Route exact path="/pages/manyDays/manyDays_inner/svaneti_inner" element={<TenDaysInner />} />
        <Route exact path="/pages/manyDays/manyDays_inner/batumi_inner" element={<BatumiInner />} />
        <Route exact path="/pages/manyDays/manyDays_inner/kakheti_inner" element={<KakhetiInner />} />

        {/* fishing */}
        <Route exact path="/pages/fishing/fishing" element={<FishingInner />} />

        {/* rafting */}
        <Route exact path="/pages/rafting/rafting_inner" element={<RaftingInner />} />

        {/* celebrations */}
        <Route exact path="/pages/celebration/celebration" element={<CelebrationInner />} />

        {/* hiking */}
        <Route exact path="/pages/hiking/hiking_inner" element={<HikingInner />} />

        {/* church */}
        <Route exact path="/pages/church/church_inner" element={<ChurchInner />} />

        {/* georgians */}
        <Route exact path="/pages/forGeorgians/forGeorgians" element={<ForGeorgians />} />

        {/* about us */}
        <Route exact path="/pages/aboutUs/aboutUs" element={<AboutUs />} />

        {/* service */}
        <Route exact path="/pages/uslugi/uslugi" element={<Services />} />

      </Routes>
    
  );
}

export default App;
