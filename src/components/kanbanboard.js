// src/components/KanbanBoard.js
import React from 'react';
import TicketCard from './ticketcard';
import './kanbanboard.css';

const KanbanBoard = ({ tickets = [], users = [], grouping, sorting }) => {
    const groupedTickets = tickets.length ? groupTickets(tickets, grouping) : {};

    return (
        <div className="kanban-board">
            {Object.keys(groupedTickets).map((group, index) => (
                <div key={index} className="kanban-column">
                    <h3 className="column-header">
                        {group} ({groupedTickets[group].length})
                    </h3>
                    <div className="ticket-list">
                        {groupedTickets[group].map(ticket => (
                            <TicketCard key={ticket.id} ticket={ticket} users={users} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

const groupTickets = (tickets, grouping) => {
    return tickets.reduce((groups, ticket) => {
        const key = ticket[grouping] || 'Other';
        if (!groups[key]) groups[key] = [];
        groups[key].push(ticket);
        return groups;
    }, {});
};

export default KanbanBoard;
