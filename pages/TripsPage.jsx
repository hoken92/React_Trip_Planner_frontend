import axios from "axios";
import { useEffect, useState } from "react";
import TripItem from "../components/TripItem.jsx";

export default function TripsPage({ newTrip }) {
  const [trips, setTrips] = useState(null);

  useEffect(() => {
    const getTrips = async function () {
      const response = await axios.get("http://localhost:3000/api/trips");

      console.log(response.data);
      setTrips(response.data);
    };
    getTrips();
  }, []);

  async function handleDelete(trip) {
    const response = await axios.delete(
      `http://localhost:3000/api/trips/${trip._id}`
    );
    console.log(response.data);
    alert(`Deleted ${response.data[0]}`);
  }

  return (
    <main>
      <h1>My Trips</h1>
      {trips
        ? trips.map((trip, i) => {
            return <TripItem key={i} trip={trip} handleDelete={handleDelete} />;
          })
        : null}
    </main>
  );
}
