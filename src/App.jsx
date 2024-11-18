import "./App.css";
import { Routes, Route } from "react-router-dom";
import EventsPage from "../pages/EventsPage.jsx";
import NotFound from "../pages/NotFound.jsx";
import Navbar from "../components/Navbar.jsx";
import TripsPage from "../pages/TripsPage.jsx";
import FlightsPage from "../pages/FlightsPage.jsx";
import HotelsPage from "../pages/HotelsPage.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<EventsPage />} />
        <Route path="/flights" element={<FlightsPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/trips" element={<TripsPage />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
