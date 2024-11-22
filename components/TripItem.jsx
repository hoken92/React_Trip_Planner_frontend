import { format } from "date-fns";

export default function TripItem({ trip, handleEdit, handleDelete }) {
  return (
    <div key={trip._id}>
      <div className="tripHeader">
        <h3>{trip.name}</h3>
        <h3>Departing Flight</h3>
        <h3>Returning Flight</h3>
        <h3>
          {format(trip.event_info.start_date, "yyyy/MM/dd")} -{" "}
          {format(trip.event_info.end_date, "yyyy/MM/dd")}
        </h3>
        <button onClick={() => handleEdit(trip)}>Edit</button>
      </div>
      <div className="tripBody">
        <div>
          <p>{trip.event_info.location}</p>
          <p>{format(trip.event_info.start_date, "yyyy/MM/dd p")}</p>
          <p>{format(trip.event_info.end_date, "yyyy/MM/dd p")}</p>
        </div>
        <div>
          <p>
            {trip.depart_flight_info.origin} to{" "}
            {trip.depart_flight_info.destination}
          </p>
          <p>{format(trip.depart_flight_info.departureDate, "yyyy/MM/dd p")}</p>
          <p>{format(trip.depart_flight_info.arriveDate, "yyyy/MM/dd p")}</p>
          <p>{trip.depart_flight_info.duration}</p>
        </div>
        <div>
          <p>
            {trip.return_flight_info.origin} to{" "}
            {trip.return_flight_info.destination}
          </p>
          <p>{format(trip.return_flight_info.departureDate, "yyyy/MM/dd p")}</p>
          <p>{format(trip.return_flight_info.arriveDate, "yyyy/MM/dd p")}</p>
          <p>{trip.return_flight_info.duration}</p>
          <p>{trip.return_flight_info.price}</p>
        </div>
        <div>
          <button onClick={() => handleDelete(trip)} id="cancelTrip">
            Cancel Trip
          </button>
        </div>
      </div>
    </div>
  );
}
