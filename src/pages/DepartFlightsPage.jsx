import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Flightheader from "../components/FlightHeader.jsx";
import DepartingFlightItem from "../components/DepartingFlightItem.jsx";
import Pagination from "../components/Pagination.jsx";

export default function DepartFlightsPage({
  flightRequestData,
  flights,
  setFlights,
  setNewDepartingFlight,
}) {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [flightsPerPage] = useState(10);

  const navigate = useNavigate();

  useEffect(() => {
    async function getFlights() {
      const res = await axios.get(
        `https://react-trip-planner-backend.onrender.com/api/flights?originLocationCode=${flightRequestData.originLocationCode}&destinationLocationCode=${flightRequestData.destinationLocationCode}&departureDate=${flightRequestData.departureDate}&returnDate=${flightRequestData.returnDate}&adults=${flightRequestData.adults}&max=50`
      );
      setFlights(res.data);
    }
    getFlights();
    setLoading(false);
  }, []);

  // Set Paginated pages
  const indexOfLastFlight = currentPage * flightsPerPage;
  const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
  let currentFlights;
  if (flights) {
    currentFlights = flights.slice(indexOfFirstFlight, indexOfLastFlight);
  }

  // Handler function when user clicks on a page number in pagination component
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const selectFlight = function (flight) {
    setNewDepartingFlight(flight);
    navigate("/returningflights");
  };

  if (loading) {
    return <h2>Page is still loading</h2>;
  }

  return (
    <main>
      {!loading ? (
        <>
          <h1 id="title">Departing Flights</h1>
          <Flightheader flightRequestData={flightRequestData} />
          <DepartingFlightItem
            loading={loading}
            flights={currentFlights}
            selectFlight={selectFlight}
          />
          <Pagination
            flightsPerPage={flightsPerPage}
            totalFlights={flights ? flights.length : 0}
            paginate={paginate}
          />{" "}
        </>
      ) : null}
    </main>
  );
}
