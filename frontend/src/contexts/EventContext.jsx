import React, { createContext, useState } from 'react';

// Create the context
export const EventContext = createContext();

// Provider component
export const EventProvider = ({ children }) => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    return (
        <EventContext.Provider value={{ selectedEvent, setSelectedEvent }}>
            {children}
        </EventContext.Provider>
    );
};
