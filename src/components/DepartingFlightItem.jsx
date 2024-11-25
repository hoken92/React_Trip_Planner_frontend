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
    <div className="flight-container">
      {flights
        ? flights.map((flight) => {
            return (
              <div key={flight.id} className="flight-item">
                <div className="item-airports">
                  <h4>
                    <b>Depart: </b>
                    {
                      flight.itineraries[0].segments[0].departure.iataCode
                    } to {flight.itineraries[0].segments[0].arrival.iataCode}
                  </h4>
                </div>
                <div className="item-dates">
                  <p>
                    <b>Flight Duration: </b>
                    {flight.itineraries[0].duration}
                  </p>
                  <p>
                    <b>Depart Time:</b>{" "}
                    {format(
                      flight.itineraries[0].segments[0].departure.at,
                      "yyyy/MM//dd p"
                    )}
                  </p>
                  <p>
                    <b>Arrival Time:</b>{" "}
                    {format(
                      flight.itineraries[0].segments[0].arrival.at,
                      "yyyy/MM//dd p"
                    )}
                  </p>
                </div>
                <div className="item-prices">
                  <p>
                    <b>Price: </b> ${flight.price.total}
                  </p>
                </div>
                <button
                  className="item-btn"
                  onClick={() => selectFlight(flight)}
                >
                  Select
                </button>
              </div>
            );
          })
        : null}
    </div>
  );
}
