import { BrowserRouter, Routes, Route } from "react-router-dom";
import BrandAlarmLanding from "./BrandAlarmLanding";
import TermeniConditii from "./pages/TermeniConditii";
import Confidentialitate from "./pages/Confidentialitate";
import PoliticaCookies from "./pages/PoliticaCookies";
import IntrebariFrecvente from "./pages/IntrebariFrecvente";
import Blog from "./pages/Blog";
import ServicePage from "./components/ServicePage";
import CookieBanner from "./components/CookieBanner";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BrandAlarmLanding />} />

        {/* Legal RO */}
        <Route path="/termeni-si-conditii" element={<TermeniConditii lang="ro" />} />
        <Route path="/confidentialitate" element={<Confidentialitate lang="ro" />} />
        <Route path="/politica-cookies" element={<PoliticaCookies lang="ro" />} />
        <Route path="/intrebari-frecvente" element={<IntrebariFrecvente lang="ro" />} />
        <Route path="/blog" element={<Blog lang="ro" />} />

        {/* Legal EN */}
        <Route path="/en/terms" element={<TermeniConditii lang="en" />} />
        <Route path="/en/privacy" element={<Confidentialitate lang="en" />} />
        <Route path="/en/cookie-policy" element={<PoliticaCookies lang="en" />} />
        <Route path="/en/faq" element={<IntrebariFrecvente lang="en" />} />
        <Route path="/en/blog" element={<Blog lang="en" />} />

        {/* Services RO */}
        <Route path="/monitorizare-marci" element={<ServicePage slug="trademark-monitoring" lang="ro" />} />
        <Route path="/cautare-similitudini" element={<ServicePage slug="similarity-search" lang="ro" />} />
        <Route path="/monitorizare-domenii" element={<ServicePage slug="domain-monitoring" lang="ro" />} />
        <Route path="/rapoarte-ai-marci" element={<ServicePage slug="ai-trademark-reports" lang="ro" />} />
        <Route path="/opozitie-marca-euipo-osim" element={<ServicePage slug="trademark-opposition" lang="ro" />} />
        <Route path="/alerte-expirare-marci" element={<ServicePage slug="trademark-expiry-alerts" lang="ro" />} />

        {/* Services EN */}
        <Route path="/en/trademark-monitoring" element={<ServicePage slug="trademark-monitoring" lang="en" />} />
        <Route path="/en/similarity-search" element={<ServicePage slug="similarity-search" lang="en" />} />
        <Route path="/en/domain-monitoring" element={<ServicePage slug="domain-monitoring" lang="en" />} />
        <Route path="/en/ai-trademark-reports" element={<ServicePage slug="ai-trademark-reports" lang="en" />} />
        <Route path="/en/trademark-opposition" element={<ServicePage slug="trademark-opposition" lang="en" />} />
        <Route path="/en/trademark-expiry-alerts" element={<ServicePage slug="trademark-expiry-alerts" lang="en" />} />
      </Routes>
      <CookieBanner />
    </BrowserRouter>
  );
}

export default App;
