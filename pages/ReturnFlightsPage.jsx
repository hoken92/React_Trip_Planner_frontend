import { useState } from "react";
import Flightheader from "../components/FlightHeader.jsx";
import ReturningFlightitem from "../components/ReturningFlightItem.jsx";
import Pagination from "../components/Pagination.jsx";
import { format } from "date-fns";

export default function ReturnFlightsPage({
  selectedEvent,
  flightRequestData,
  flights,
  newDepartingFlight,
}) {
  const [newReturningFlight, setnewReturningFlight] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [flightsPerPage] = useState(10);

  const requestBody = {
    name: selectedEvent.event_name,
    date: () => format(new Date(), "yyyy/MM/dd"),
    event_info: {
      name: "",
      location: "",
      event_start_date: "",
      event_end_date: "",
    },
    depart_flight_info: {
      origin: "",
      destination: "",
      departureDate: "",
      arriveDate: "",
      price: "",
    },
    return_flight_info: {
      origin: "",
      destination: "",
      departureDate: "",
      arriveDate: "",
      price: "",
    },
  };

  // Set Paginated pages
  const indexOfLastFlight = currentPage * flightsPerPage;
  const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
  const currentFlights = flights.slice(indexOfFirstFlight, indexOfLastFlight);

  // Handler function when user clicks on a page number in pagination component
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const submitTrip = async function (flight) {
    setnewReturningFlight({ ...newReturningFlight, flight });
    // const response = await axios.post('http://localhost:3000/api/trips', requestBody);
    // navigate("/trips");
  };

  return (
    <>
      <h1>Returning Flights</h1>
      <Flightheader flightRequestData={flightRequestData} />
      <ReturningFlightitem flights={currentFlights} submitTrip={submitTrip} />
      <Pagination
        flightsPerPage={flightsPerPage}
        totalFlights={flights.length}
        paginate={paginate}
      />
    </>
  );
}
