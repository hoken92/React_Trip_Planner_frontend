import { format } from "date-fns";

export default function DepartingFlightItem({
  loading,
  flights,
  selectFlight,
}) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="flight-item">
      {flights.map((flight) => {
        return (
          <div key={flight.id}>
            <div>
              <p>
                {flight.itineraries[0].segments[0].departure.iataCode} to{" "}
                {flight.itineraries[0].segments[0].arrival.iataCode}
              </p>
            </div>
            <div>
              <p>
                <b>Flight Duration: </b>
                {flight.itineraries[0].duration}
              </p>
              <p>
                <b>Depart Time:</b>{" "}
                {format(
                  flight.itineraries[0].segments[0].departure.at,
                  "yyyy/MM//dd p"
                )}{" "}
                -<b>Arrival Time:</b>{" "}
                {format(
                  flight.itineraries[0].segments[0].arrival.at,
                  "yyyy/MM//dd p"
                )}
              </p>
            </div>
            <div>
              <p>Price: ${flight.price.total}</p>
            </div>
            <button onClick={() => selectFlight(flight)}>Select</button>
          </div>
        );
      })}
    </div>
  );
}
