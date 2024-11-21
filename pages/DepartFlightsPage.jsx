import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Flightheader from "../components/FlightHeader.jsx";
import DepartingFlightItem from "../components/DepartingFlightItem.jsx";
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
    const getFlights = async () => {
      const res = await axios.get(
        `http://localhost:3000/api/flights?originLocationCode=${newEvent.originLocationCode}&destinationLocationCode=${newEvent.destinationLocationCode}&departureDate=${newEvent.departureDate}&returnDate=${newEvent.returnDate}&adults=${newEvent.adults}`
      );
      setFlights(res.data);
      console.log(flights);
    };
    getFlights();
    setLoading(false);
  }, [newEvent]);

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
      <DepartingFlightItem
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
