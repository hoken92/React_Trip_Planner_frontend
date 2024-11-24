import { format } from "date-fns";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Confirmation({
  selectedEvent,
  newDepartingFlight,
  newReturningFlight,
}) {
  const navigate = useNavigate();

  if (!selectedEvent) {
    return <h3>Please try again</h3>;
  }

  // Creating the Post request body
  const requestBody = {
    name: selectedEvent[0].event_name,
    event_info: {
      name: selectedEvent[0].event_name,
      location: selectedEvent[0].location.city,
      start_date: format(selectedEvent[0].event_date.start, "yyyy-MM-dd"),
      end_date: format(selectedEvent[0].event_date.end, "yyyy-MM-dd"),
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
  async function handleSubmit() {
    try {
      await axios.post(
        "https://react-trip-planner-backend.onrender.com/api/trips",
        requestBody
      );

      navigate("/trips");
    } catch (err) {
      console.log(err);
    }
  }

  // Handle Cancel
  function handleCancel() {
    navigate("/");
  }

  return (
    <main>
      <h1 id="title">Confirmation</h1>
      {/* If request body is not null, display the items on the page */}
      {requestBody ? (
        <div>
          <div>
            <h3>Event:</h3>
            <p>{requestBody.event_info.name}</p>
            <p>Location: {requestBody.event_info.location}</p>
            <p>Dates:</p>
            <p>
              {format(requestBody.event_info.start_date, "yyyy/MM/dd")} to{" "}
              {format(requestBody.event_info.end_date, "yyyy/MM/dd")}
            </p>
          </div>
          <div>
            <h3>Departing Flight:</h3>
            <p>
              {requestBody.depart_flight_info.origin} to{" "}
              {requestBody.depart_flight_info.destination}
            </p>
            <p>
              Depart Time:{" "}
              {format(
                requestBody.depart_flight_info.departureDate,
                "yyyy/MM/dd p"
              )}
            </p>
            <p>
              Arrival Time:{" "}
              {format(
                requestBody.depart_flight_info.arriveDate,
                "yyyy/MM/dd p"
              )}
            </p>
            <p>{requestBody.depart_flight_info.duration}</p>
          </div>
          <div>
            <h3>Returning Flight:</h3>
            <p>
              {requestBody.return_flight_info.origin} to{" "}
              {requestBody.return_flight_info.destination}
            </p>
            <p>
              Depart Time:{" "}
              {format(
                requestBody.return_flight_info.departureDate,
                "yyyy/MM/dd p"
              )}
            </p>
            <p>
              Arrival Time:{" "}
              {format(
                requestBody.return_flight_info.arriveDate,
                "yyyy/MM/dd p"
              )}
            </p>
            <p>{requestBody.return_flight_info.duration}</p>
          </div>
          <div>
            <h3>Price:</h3>
            <p>{requestBody.depart_flight_info.price}</p>
          </div>
          <button id="cancelBtn" onClick={handleCancel}>
            Cancel
          </button>
          <button id="submitBtn" onClick={handleSubmit}>
            Confirm
          </button>
        </div>
      ) : null}
    </main>
  );
}
