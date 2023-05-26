import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../src/App.css";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2022, 12, 0),
        end: new Date(2022, 12, 0),
    },
    {
        title: "Vacation",
        start: new Date(2022, 12, 7),
        end: new Date(2022, 12, 10),
    },
    {
        title: "Conference",
        start: new Date(2022, 12, 20),
        end: new Date(2022, 12, 23),
    },
];

export function CalendarApp() {
    const [newEvent, setNewEvent] = useState({ title: "", start: new Date(), end: new Date()});
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        
        for (let i=0; i<allEvents.length; i++){

            const d1 = new Date (allEvents[i].start);
            const d2 = new Date(newEvent.start);
            const d3 = new Date(allEvents[i].end);
            const d4 = new Date(newEvent.end);
      /*
          console.log(d1 <= d2);
          console.log(d2 <= d3);
          console.log(d1 <= d4);
          console.log(d4 <= d3);
            */

             if (
              ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
                (d4 <= d3) )
              )
            {   
                alert("CLASH"); 
                break;
             }
    
        }
        
        
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <div>
            <div style={{display: 'none'}} className="add-event-panel">
              <h1>Calendar</h1>
              <h2>Add New Event</h2>
              <div>
                  <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                  <DatePicker placeholderText="Start Date" selected={newEvent.start} onChange={(start :any) => setNewEvent({ ...newEvent, start })} />
                  <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end :any) => setNewEvent({ ...newEvent, end })} />
                  <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
                      Add Event
                  </button>
              </div>
            </div>

            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: '90vh', margin: "10px" }} />
        </div>
    );
}