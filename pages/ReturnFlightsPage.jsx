import { useState } from "react";
import Flightheader from "../components/FlightHeader.jsx";
import ReturningFlightitem from "../components/ReturningFlightItem.jsx";
import Pagination from "../components/Pagination.jsx";

export default function ReturnFlightsPage({
  newEvent,
  flights,
  newReturningFlight,
  setnewReturningFlight,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [flightsPerPage] = useState(10);

  // Set Paginated pages
  const indexOfLastFlight = currentPage * flightsPerPage;
  const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
  const currentFlights = flights.slice(indexOfFirstFlight, indexOfLastFlight);

  // Handler function when user clicks on a page number in pagination component
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const selectFlight = function (flight) {
    setnewReturningFlight({ ...newReturningFlight, flight });
    // navigate("/returningflights");
  };

  return (
    <>
      <h1>Returning Flights</h1>
      <Flightheader newEvent={newEvent} />
      <ReturningFlightitem
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
