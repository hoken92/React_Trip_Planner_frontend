import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

export default function EventsPage({
  selectedEvent,
  setSelectedEvent,
  flightRequestData,
  setFlightRequestData,
}) {
  // useState for Static events from DB
  const [events, setEvents] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  // creates the useNavigate function
  const navigate = useNavigate();

  // Retrieves all static events from the DB on load
  useEffect(() => {
    const getEvents = async () => {
      const res = await axios.get(
        "https://react-trip-planner-backend.onrender.com/api/events"
      );
      setEvents(...events, res.data);
    };
    getEvents();
  }, []);

  // When a user changes the dropdown, it'll save the selected event object to selectedEvent
  function handleChange(e) {
    const selection = events.filter((event) => {
      if (event.location.cityCode === e.target.value) {
        return event;
      }
    });
    setSelectedEvent(selection);

    // If selectedEvent has an object, change the isSelected to true
    if (e.target.value !== "") {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }

  // Submits the form with an event matching the option value and sets the selected event to a useState
  function submitEvent(e) {
    e.preventDefault();

    if (selectedEvent) {
      setFlightRequestData({
        ...flightRequestData,
        originLocationCode: "LAX",
        destinationLocationCode: selectedEvent[0].location.cityCode,
        departureDate: format(selectedEvent[0].event_date.start, "yyyy-MM-dd"),
        returnDate: format(selectedEvent[0].event_date.end, "yyyy-MM-dd"),
        adults: 1,
      });
      navigate("/departingflights");
    }
  }

  return (
    <main>
      <h1 id="title">Events</h1>
      <div id="container">
        <div id="form-container">
          <form onSubmit={submitEvent} id="event-form">
            <select name="" id="form-dropdown" onChange={handleChange}>
              <option value="">Select One</option>
              {events.map((event) => {
                return (
                  <option key={event._id} value={event.location.cityCode}>
                    {event.event_name}
                  </option>
                );
              })}
            </select>
            <button>Search Flights</button>
          </form>
          {/* If an event is chosen, will display the event information */}
          {isSelected ? (
            <div>
              <p>
                <b>Event: </b>
                <br />
                {selectedEvent[0].event_name}
              </p>
              <p>
                <b>Event Location: </b>
                <br /> {selectedEvent[0].location.city}
              </p>
              <p>
                <b>Event Start Date: </b> <br />
                {new Date(selectedEvent[0].event_date.start).toDateString()}
              </p>
              <p>
                <b>Event End Date :</b> <br />
                {new Date(selectedEvent[0].event_date.end).toDateString()}
              </p>
            </div>
          ) : null}
        </div>
        {/* If an event is chosen, will display the event line up poster */}
        {isSelected ? (
          <div id="poster-container">
            <img
              className="event_poster"
              src={selectedEvent[0].poster}
              alt={selectedEvent[0].event_name}
            />
          </div>
        ) : null}
      </div>
    </main>
  );
}
