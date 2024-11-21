import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Flightheader from "../components/FlightHeader";
import Flightitem from "../components/Flightitem";
import Pagination from "../components/Pagination.jsx";
import { flightdata } from "../data/flights.js";

export default function FlightsPage({ newEvent, setNewFlight, newFlight }) {
  const [flights, setFlights] = useState(flightdata);
  const [departFlight, setDepartFlight] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [flightsPerPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    console.log(newEvent);
    setLoading(false);
  }, [newEvent]);

  // async () => {
  //   const res = await axios.get(`http://localhost:3000/api/flights?originLocationCode=${newEvent.originLocationCode}&destinationLocationCode=${newEvent.destinationLocationCode}&departureDate=${departureDate}&returnDate=${returnDate}&adults=${newEvent.adults}`)
  // }

  // Set Paginated pages
  const indexOfLastFlight = currentPage * flightsPerPage;
  const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
  const currentFlights = flights.slice(indexOfFirstFlight, indexOfLastFlight);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <h1>Flights</h1>
      <Flightheader newEvent={newEvent} />
      <Flightitem
        loading={loading}
        flights={currentFlights}
        departFlight={departFlight}
        setDepartFlight={setDepartFlight}
      />
      <Pagination
        flightsPerPage={flightsPerPage}
        totalFlights={flights.length}
        paginate={paginate}
      />
    </>
  );
}
