import { format } from "date-fns";

export default function TripItem({ trip, handleEdit, handleDelete }) {
  return (
    <div key={trip._id} className="trip-item">
      <div className="tripHeader">
        <h4>{trip.name}</h4>
        <h4>Departing Flight</h4>
        <h4>Returning Flight</h4>
        <h4>
          Date:
          <br />
          {format(trip.event_info.start_date, "yyyy/MM/dd")} -{" "}
          {format(trip.event_info.end_date, "yyyy/MM/dd")}
        </h4>
        <button className="edit-btn" onClick={() => handleEdit(trip)}>
          Edit
        </button>
      </div>
      <div className="tripBody">
        <div>
          <p>
            <b>City: </b> {trip.event_info.location}
          </p>
          <p>
            <b>Start: </b> {format(trip.event_info.start_date, "yyyy/MM/dd p")}
          </p>
          <p>
            <b>End: </b> {format(trip.event_info.end_date, "yyyy/MM/dd p")}
          </p>
        </div>
        <div>
          <p>
            {trip.depart_flight_info.origin} to{" "}
            {trip.depart_flight_info.destination}
          </p>
          <p>
            <b>Depart: </b>
            {format(trip.depart_flight_info.departureDate, "yyyy/MM/dd p")}
          </p>
          <p>
            <b>Arrival: </b>
            {format(trip.depart_flight_info.arriveDate, "yyyy/MM/dd p")}
          </p>
          <p>{trip.depart_flight_info.duration}</p>
        </div>
        <div>
          <p>
            {trip.return_flight_info.origin} to{" "}
            {trip.return_flight_info.destination}
          </p>
          <p>
            <b>Depart: </b>
            {format(trip.return_flight_info.departureDate, "yyyy/MM/dd p")}
          </p>
          <p>
            <b>Arrival: </b>
            {format(trip.return_flight_info.arriveDate, "yyyy/MM/dd p")}
          </p>
          <p>{trip.return_flight_info.duration}</p>
        </div>
        <div>
          <h5>Price: </h5>
          <p>{trip.return_flight_info.price}</p>
        </div>
        <div className="btn-container">
          <button className="delete-btn" onClick={() => handleDelete(trip)}>
            Cancel Trip
          </button>
        </div>
      </div>
    </div>
  );
}
