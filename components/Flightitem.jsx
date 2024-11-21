import { format } from "date-fns";

export default function Flightitem({
  loading,
  flights,
  departFlight,
  setDepartFlight,
}) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
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
                {flight.itineraries[0].segments[0].departure.at} -
                <b>Arrival Time:</b>{" "}
                {flight.itineraries[0].segments[0].arrival.at}
              </p>
            </div>
            <div>
              <p>Price: ${flight.price.total}</p>
            </div>
            <button>Select</button>
          </div>
        );
      })}
    </div>
  );
}
