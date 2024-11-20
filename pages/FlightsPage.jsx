import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Flightheader from "../components/FlightHeader";
import Flightitem from "../components/Flightitem";

export default function FlightsPage({ newEvent, setNewFlight, newFlight }) {
  const [flights, setFlights] = useState([]);
  const [departFlight, setDepartFlight] = {};

  useEffect(() => {
    console.log(newEvent);
  }, [newEvent]);

  // async () => {
  //   const res = await axios.get(`http://localhost:3000/api/flights?originLocationCode=${newEvent.originLocationCode}&destinationLocationCode=${newEvent.destinationLocationCode}&departureDate=${departureDate}&returnDate=${returnDate}&adults=${newEvent.adults}`)
  // }

  return (
    <>
      <h1>Flights</h1>
      <Flightheader newEvent={newEvent} />
      {/* {flights.map((flight) => {

      })} */}
    </>
  );
}
