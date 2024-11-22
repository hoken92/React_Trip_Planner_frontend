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

function App() {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [flightRequestData, setFlightRequestData] = useState({});
  const [flights, setFlights] = useState([]);
  const [newDepartingFlight, setNewDepartingFlight] = useState({});

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <EventsPage
              selectedEvent={selectedEvent}
              setSelectedEvent={setSelectedEvent}
              flightRequestData={flightRequestData}
              setFlightRequestData={setFlightRequestData}
            />
          }
        />
        <Route
          path="/departingflights"
          element={
            <DepartFlightsPage
              flightRequestData={flightRequestData}
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
              selectedEvent={selectedEvent}
              flightRequestData={flightRequestData}
              flights={flights}
              newDepartingFlight={newDepartingFlight}
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
