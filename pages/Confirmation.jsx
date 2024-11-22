import { format } from "date-fns";
import axios from "axios";

export default function Confirmation({
  selectedEvent,
  newDepartingFlight,
  newReturningFlight,
}) {
  if (!selectedEvent) {
    return <h3>Please try again</h3>;
  }

  // Creating the Post request body
  const requestBody = {
    name: selectedEvent[0].event_name,
    event_info: {
      name: selectedEvent[0].event_name,
      location: selectedEvent[0].location.city,
      event_start_date: selectedEvent[0].event_date.start,
      event_end_date: selectedEvent[0].event_date.end,
    },
    depart_flight_info: {
      origin: newDepartingFlight.itineraries[0].segments[0].departure.iataCode,
      departureDate: newDepartingFlight.itineraries[0].segments[0].departure.at,
      destination:
        newDepartingFlight.itineraries[0].segments[0].arrival.iataCode,
      arriveDate: newDepartingFlight.itineraries[0].segments[0].arrival.at,
      duration: newDepartingFlight.itineraries[0].segments[0].duration,
      price: newDepartingFlight.price.total,
    },
    return_flight_info: {
      origin: newReturningFlight.itineraries[1].segments[0].departure.iataCode,
      departureDate: newReturningFlight.itineraries[1].segments[0].departure.at,
      destination:
        newReturningFlight.itineraries[1].segments[0].arrival.iataCode,
      arriveDate: newReturningFlight.itineraries[1].segments[0].arrival.at,
      duration: newReturningFlight.itineraries[1].segments[0].duration,
      price: newReturningFlight.price.total,
    },
  };

  // Post request to the backend
  // Handle submit
  function handleSubmit() {}

  // Handle Cancel
  function handleCancel() {}

  return (
    <>
      <h1>Confirmation</h1>
      {/* If request body is not null, display the items on the page */}
      {requestBody ? (
        <div>
          <div>
            <h2>Name:</h2>
            <p>{requestBody.name}</p>
          </div>
          <div>
            <h2>Event:</h2>
            <p>{requestBody.event_info.name}</p>
            <p>Location: {requestBody.event_info.location}</p>
            <p>Dates:</p>
            <p>
              {format(requestBody.event_info.event_start_date, "yyyy/MM/dd")} to{" "}
              {format(requestBody.event_info.event_end_date, "yyyy/MM/dd")}
            </p>
          </div>
          <div>
            <h2>Departing Flight:</h2>
            <p>
              {requestBody.depart_flight_info.origin} to{" "}
              {requestBody.depart_flight_info.destination}
            </p>
            <p>
              {format(
                requestBody.depart_flight_info.departureDate,
                "yyyy/MM/dd"
              )}{" "}
              to{" "}
              {format(requestBody.depart_flight_info.arriveDate, "yyyy/MM/dd")}
            </p>
            <p>{requestBody.depart_flight_info.duration}</p>
          </div>
          <div>
            <h2>Returning Flight:</h2>
            <p>
              {requestBody.return_flight_info.origin} to{" "}
              {requestBody.return_flight_info.destination}
            </p>
            <p>
              {format(
                requestBody.return_flight_info.departureDate,
                "yyyy/MM/dd"
              )}{" "}
              to{" "}
              {format(requestBody.return_flight_info.arriveDate, "yyyy/MM/dd")}
            </p>
            <p>{requestBody.return_flight_info.duration}</p>
          </div>
          <div>
            <h3>{requestBody.depart_flight_info.price}</h3>
          </div>
          <button id="cancelBtn" onClick={handleCancel}>
            Cancel
          </button>
          <button id="submitBtn" onClick={handleSubmit}>
            Confirm
          </button>
        </div>
      ) : null}
    </>
  );
}
