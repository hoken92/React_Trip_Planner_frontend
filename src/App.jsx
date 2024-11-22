import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import EventsPage from "./pages/EventsPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import Navbar from "./components/Navbar.jsx";
import TripsPage from "./pages/TripsPage.jsx";
import DepartFlightsPage from "./pages/DepartFlightsPage.jsx";
import ReturnFlightsPage from "./pages/ReturnFlightsPage.jsx";
import Confirmation from "./pages/Confirmation.jsx";
import EditTripPage from "./pages/EditTripPage.jsx";
import { flightdata } from "../data/flights.js";

function App() {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [flightRequestData, setFlightRequestData] = useState({});
  const [flights, setFlights] = useState(flightdata);
  const [newDepartingFlight, setNewDepartingFlight] = useState({});
  const [newReturningFlight, setnewReturningFlight] = useState({});
  const [trip, setTrip] = useState(null);

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
              flightRequestData={flightRequestData}
              flights={flights}
              newReturningFlight={newReturningFlight}
              setnewReturningFlight={setnewReturningFlight}
            />
          }
        />
        <Route
          path="/confirmation"
          element={
            <Confirmation
              selectedEvent={selectedEvent}
              newDepartingFlight={newDepartingFlight}
              newReturningFlight={newReturningFlight}
            />
          }
        />
        <Route path="/trips" element={<TripsPage setTrip={setTrip} />} />
        <Route path="/edit-trip" element={<EditTripPage trip={trip} />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
