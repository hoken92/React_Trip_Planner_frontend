export default function Flightheader({ newEvent }) {
  return (
    <div>
      <h2>
        {newEvent.originLocationCode} to {newEvent.destinationLocationCode}
      </h2>
      <h2>
        {newEvent.departureDate} to {newEvent.returnDate}
      </h2>
    </div>
  );
}
