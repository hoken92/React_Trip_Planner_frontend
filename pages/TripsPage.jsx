import axios from "axios";
import { useEffect, useState } from "react";
import TripItem from "../components/TripItem.jsx";
import { useNavigate } from "react-router-dom";

export default function TripsPage({ setTrip }) {
  const [trips, setTrips] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getTrips = async function () {
      const response = await axios.get("http://localhost:3000/api/trips");

      setTrips(response.data);
    };
    getTrips();
  }, []);

  // Navigate user to the edit page to edit a trip
  async function handleEdit(trip) {
    console.log(trip);
    setTrip(trip);
    navigate("/edit-trip");
  }

  // Delete a trip
  async function handleDelete(trip) {
    const response = await axios.delete(
      `http://localhost:3000/api/trips/${trip._id}`
    );
    console.log(response.data);
    alert(`Deleted ${response.data.name}`);
  }

  return (
    <main>
      <h1>My Trips</h1>
      {trips
        ? trips.map((trip, i) => {
            return (
              <TripItem
                key={i}
                trip={trip}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            );
          })
        : null}
    </main>
  );
}
