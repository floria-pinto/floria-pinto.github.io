// src/components/TicketCard.js
import React from 'react';
import './ticketcard.css';

const getUserInitials = (name) => {
    const initials = name.split(' ').map(part => part[0]).join('');
    return initials;
};

const TicketCard = ({ ticket, users }) => {
    const user = users.find(u => u.id === ticket.userId);

    return (
        <div className="ticket-card">
            <div className="ticket-header">
                <span className="ticket-id">{ticket.id}</span>
                <span className="ticket-priority">Priority: {ticket.priority}</span>
            </div>
            <h4 className="ticket-title">{ticket.title}</h4>
            <div className="ticket-tags">
                {ticket.tag.map((tag, index) => (
                    <span key={index} className="ticket-tag">{tag}</span>
                ))}
            </div>
            <div className="ticket-user">
                {user && (
                    <div className="profile-icon">
                        {user.avatar ? (
                            <img src={user.avatar} alt={user.name} className="avatar" />
                        ) : (
                            <div className="initials">{getUserInitials(user.name)}</div>
                        )}
                    </div>
                )}
                <span>Assigned to: {user ? user.name : 'Unassigned'}</span>
            </div>
        </div>
    );
};

export default TicketCard;
