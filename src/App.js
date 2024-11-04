import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/kanbanboard';
import './App.css';

const App = () => {
    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);
    const [grouping, setGrouping] = useState('status');
    const [sorting, setSorting] = useState('priority');

    useEffect(() => {
        const fetchTickets = async () => {
            const response = await fetch('http://localhost:5000/tickets');
            const data = await response.json();
            setTickets(data);
        };

        const fetchUsers = async () => {
            const response = await fetch('http://localhost:5000/users');
            const data = await response.json();
            setUsers(data);
        };

        fetchTickets();
        fetchUsers();
    }, []);

    const handleGroupingChange = (event) => setGrouping(event.target.value);
    const handleSortingChange = (event) => setSorting(event.target.value);

    return (
        <div className="App">
            <header className="header">
                <div className="display-options">
                    <label>Grouping</label>
                    <select value={grouping} onChange={handleGroupingChange}>
                        <option value="status">Status</option>
                        <option value="user">User</option>
                        <option value="priority">Priority</option>
                    </select>
                    <label>Ordering</label>
                    <select value={sorting} onChange={handleSortingChange}>
                        <option value="priority">Priority</option>
                        <option value="title">Title</option>
                    </select>
                </div>
            </header>
            <KanbanBoard tickets={tickets} users={users} grouping={grouping} sorting={sorting} />
        </div>
    );
};

export default App;
