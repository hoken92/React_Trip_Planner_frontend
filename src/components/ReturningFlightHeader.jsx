export default function ReturningFlightHeader({ flightRequestData }) {
  return (
    <div className="flight-header">
      <h2>
        {flightRequestData.destinationLocationCode} to{" "}
        {flightRequestData.originLocationCode}
      </h2>
      <h2>{flightRequestData.departureDate}</h2>
    </div>
  );
}
