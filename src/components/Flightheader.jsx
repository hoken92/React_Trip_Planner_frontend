export default function Flightheader({ flightRequestData }) {
  return (
    <div className="flight-header">
      <h2>
        {flightRequestData.originLocationCode} to{" "}
        {flightRequestData.destinationLocationCode}
      </h2>
      <h2>
        {flightRequestData.departureDate} to {flightRequestData.returnDate}
      </h2>
    </div>
  );
}
