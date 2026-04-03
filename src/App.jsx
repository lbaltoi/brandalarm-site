import { BrowserRouter, Routes, Route } from "react-router-dom";
import BrandAlarmLanding from "./BrandAlarmLanding";
import TermeniConditii from "./pages/TermeniConditii";
import Confidentialitate from "./pages/Confidentialitate";
import PoliticaCookies from "./pages/PoliticaCookies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BrandAlarmLanding />} />
        <Route path="/termeni-si-conditii" element={<TermeniConditii />} />
        <Route path="/confidentialitate" element={<Confidentialitate />} />
        <Route path="/politica-cookies" element={<PoliticaCookies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
