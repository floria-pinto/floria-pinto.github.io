import React from 'react';
import TicketCard from './ticketcard';

const Column = ({ title, tickets }) => (
    <div className="column">
        <h3>{title}</h3>
        {tickets.map(ticket => <TicketCard key={ticket.id} ticket={ticket} />)}
    </div>
);

export default Column;
