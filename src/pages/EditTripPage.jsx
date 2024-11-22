import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditTripPage({ trip }) {
  const [tripData, setTripData] = useState(trip);

  const navigate = useNavigate();

  const handleFormDataChange = (e) => {
    setTripData({
      [e.target.name]: e.target.value,
    });
    console.log(tripData);
  };

  async function submitEdit(e) {
    e.preventDefault();
    try {
      await axios.put(
        `https://react-trip-planner-backend.onrender.com/api/trips/${trip._id}`,
        tripData
      );
      navigate("/trips");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <h1>Edit your Trips</h1>
      <div>
        <form onSubmit={submitEdit}>
          <label htmlFor="name">
            Name:
            <p>{trip.name}</p>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleFormDataChange}
            />
          </label>
          <button>Submit Changes</button>
        </form>
      </div>
    </>
  );
}
