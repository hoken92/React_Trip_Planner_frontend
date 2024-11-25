import { format } from "date-fns";

export default function ReturningFlightitem({ flights, submitFlight }) {
  return (
    <div>
      {flights.map((flight) => {
        return (
          <div key={flight.id} className="flight-item">
            <div>
              <h4>
                <b>Returning: </b>
                {flight.itineraries[1].segments[0].departure.iataCode} to{" "}
                {flight.itineraries[1].segments[0].arrival.iataCode}
              </h4>
            </div>
            <div className="item-dates">
              <p>
                <b>Flight Duration: </b>
                {flight.itineraries[1].duration}
              </p>
              <p>
                <b>Depart Time:</b>{" "}
                {format(
                  flight.itineraries[1].segments[0].departure.at,
                  "yyyy/MM//dd p"
                )}{" "}
                -<b>Arrival Time:</b>{" "}
                {format(
                  flight.itineraries[1].segments[0].arrival.at,
                  "yyyy/MM//dd p"
                )}
              </p>
            </div>
            <div className="item-prices">
              <p>Price: ${flight.price.total}</p>
            </div>
            <button className="item-btn" onClick={() => submitFlight(flight)}>
              Select
            </button>
          </div>
        );
      })}
    </div>
  );
}
