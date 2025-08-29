import { Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import General from "./pages/General/General";
import Shop from "./pages/Shop/Shop";
import Contacts from "./pages/Contacts/Contacts";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/N2L/" element={<General />} />
        {/* <Route path="/N2L/Algorithm" element={<Algorithm />} /> */}
        <Route path="/N2L/Shop" element={<Shop />} />
        <Route path="/N2L/Contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
