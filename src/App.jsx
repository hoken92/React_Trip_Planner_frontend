import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import EventsPage from "../pages/EventsPage.jsx";
import NotFound from "../pages/NotFound.jsx";
import Navbar from "../components/Navbar.jsx";
import TripsPage from "../pages/TripsPage.jsx";
import DepartFlightsPage from "../pages/DepartFlightsPage.jsx";
import ReturnFlightsPage from "../pages/ReturnFlightsPage.jsx";
import HotelsPage from "../pages/HotelsPage.jsx";
import { flightdata } from "../data/flights.js";

function App() {
  const [newEvent, setNewEvent] = useState({});
  const [flights, setFlights] = useState(flightdata);
  const [newDepartingFlight, setNewDepartingFlight] = useState({});
  const [newReturningFlight, setnewReturningFlight] = useState({});

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<EventsPage newEvent={newEvent} setNewEvent={setNewEvent} />}
        />
        <Route
          path="/departingflights"
          element={
            <DepartFlightsPage
              newEvent={newEvent}
              flights={flights}
              setFlights={setFlights}
              setNewDepartingFlight={setNewDepartingFlight}
              newDepartingFlight={newDepartingFlight}
            />
          }
        />
        <Route
          path="/returningflights"
          element={
            <ReturnFlightsPage
              newEvent={newEvent}
              flights={flights}
              newReturningFlight={newReturningFlight}
              setnewReturningFlight={setnewReturningFlight}
            />
          }
        />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/trips" element={<TripsPage />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
