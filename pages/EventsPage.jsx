import { useEffect, useState } from "react";
import axios from "axios";

export default function EventsPage({ newEvent, setNewEvent }) {
  // useState for Static events from DB
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("");

  // Retrieves all static events from the DB on load
  useEffect(() => {
    const getEvents = async () => {
      const res = await axios.get("http://localhost:3000/api/events");
      console.log(res.data);
      setEvents(res.data);
    };
    getEvents();
  }, []);

  // Submits the form with an event matching the option value and sets the selected event to a useState
  function submitEvent(e) {
    e.preventDefault();
    const chosenEvent = events.filter((event) => {
      if (event.location.cityCode === selectedEvent) {
        return event;
      }
    });
    console.log(chosenEvent);
    setNewEvent(chosenEvent);
  }

  return (
    <>
      <h1>Events</h1>
      <form onSubmit={submitEvent}>
        <select
          name=""
          id=""
          value={selectedEvent}
          onChange={(e) => setSelectedEvent(e.target.value)}
        >
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
    </>
  );
}
