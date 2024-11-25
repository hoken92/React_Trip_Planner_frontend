import { useState } from "react";
import ReturningFlightHeader from "../components/ReturningFlightHeader.jsx";
import ReturningFlightitem from "../components/ReturningFlightItem.jsx";
import Pagination from "../components/Pagination.jsx";
import { useNavigate } from "react-router-dom";

export default function ReturnFlightsPage({
  flightRequestData,
  flights,
  setnewReturningFlight,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [flightsPerPage] = useState(10);

  const navigate = useNavigate();

  // Set Paginated pages
  const indexOfLastFlight = currentPage * flightsPerPage;
  const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
  const currentFlights = flights.slice(indexOfFirstFlight, indexOfLastFlight);

  // Handler function when user clicks on a page number in pagination component
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const submitFlight = async function (flight) {
    setnewReturningFlight(flight);
    navigate("/confirmation");
  };

  return (
    <main>
      <h1 id="title">Returning Flights</h1>
      <ReturningFlightHeader flightRequestData={flightRequestData} />
      <ReturningFlightitem
        flights={currentFlights}
        submitFlight={submitFlight}
      />
      <Pagination
        flightsPerPage={flightsPerPage}
        totalFlights={flights.length}
        paginate={paginate}
      />
    </main>
  );
}
