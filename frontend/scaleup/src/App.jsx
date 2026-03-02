import { Routes, Route } from "react-router-dom";
import FAQPage from "./faq/FAQ";
import ContactPage from "./contact/ContactPage";
import TeamPage from "./team/TeamPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ContactPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/faq" element={<FAQPage />} />
    </Routes>
  );
}

export default App;