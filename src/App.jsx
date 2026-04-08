import { BrowserRouter, Routes, Route } from "react-router-dom";
import BrandAlarmLanding from "./BrandAlarmLanding";
import TermeniConditii from "./pages/TermeniConditii";
import Confidentialitate from "./pages/Confidentialitate";
import PoliticaCookies from "./pages/PoliticaCookies";
import IntrebariFrecvente from "./pages/IntrebariFrecvente";
import CookieBanner from "./components/CookieBanner";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BrandAlarmLanding />} />
        {/* RO routes */}
        <Route path="/termeni-si-conditii" element={<TermeniConditii lang="ro" />} />
        <Route path="/confidentialitate" element={<Confidentialitate lang="ro" />} />
        <Route path="/politica-cookies" element={<PoliticaCookies lang="ro" />} />
        <Route path="/intrebari-frecvente" element={<IntrebariFrecvente lang="ro" />} />
        {/* EN routes */}
        <Route path="/en/terms" element={<TermeniConditii lang="en" />} />
        <Route path="/en/privacy" element={<Confidentialitate lang="en" />} />
        <Route path="/en/cookie-policy" element={<PoliticaCookies lang="en" />} />
        <Route path="/en/faq" element={<IntrebariFrecvente lang="en" />} />
      </Routes>
      <CookieBanner />
    </BrowserRouter>
  );
}

export default App;
