import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Flightheader from "../components/FlightHeader.jsx";
import DepartingFlightitem from "../components/DepartingFlightitem.jsx";
import Pagination from "../components/Pagination.jsx";

export default function DepartFlightsPage({
  newEvent,
  flights,
  setFlights,
  setNewDepartingFlight,
  newDepartingFlight,
}) {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [flightsPerPage] = useState(10);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    console.log(newEvent);
    setLoading(false);
  }, []);

  // async () => {
  //   const res = await axios.get(`http://localhost:3000/api/flights?originLocationCode=${newEvent.originLocationCode}&destinationLocationCode=${newEvent.destinationLocationCode}&departureDate=${departureDate}&returnDate=${returnDate}&adults=${newEvent.adults}`)
  // }

  // Set Paginated pages
  const indexOfLastFlight = currentPage * flightsPerPage;
  const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
  const currentFlights = flights.slice(indexOfFirstFlight, indexOfLastFlight);

  // Handler function when user clicks on a page number in pagination component
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const selectFlight = function (flight) {
    setNewDepartingFlight({ ...newDepartingFlight, flight });
    navigate("/returningflights");
  };

  return (
    <>
      <h1>Departing Flights</h1>
      <Flightheader newEvent={newEvent} />
      <DepartingFlightitem
        loading={loading}
        flights={currentFlights}
        selectFlight={selectFlight}
      />
      <Pagination
        flightsPerPage={flightsPerPage}
        totalFlights={flights.length}
        paginate={paginate}
      />
    </>
  );
}
