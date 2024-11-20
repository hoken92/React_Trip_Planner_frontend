import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function FlightsPage({ newEvent, setNewFlight, newFlight }) {
  useEffect(() => {
    console.log(newEvent);
  }, []);

  return (
    <>
      <h1>Flights</h1>
    </>
  );
}
