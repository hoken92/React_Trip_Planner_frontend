import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function FlightsPage({ newEvent, setNewFlight, newFlight }) {
  useEffect(() => {
    console.log(newEvent);
  }, []);

  // async () => {
  //   const res = await axios.get(`http://localhost:3000/api/flights?originLocationCode=${newEvent.originLocationCode}&destinationLocationCode=${newEvent.destinationLocationCode}&departureDate=${departureDate}&returnDate=${returnDate}&adults=${newEvent.adults}`)
  // }

  return (
    <>
      <h1>Flights</h1>
    </>
  );
}
