import React from 'react';

const FilterControls = ({ grouping, sorting, setGrouping, setSorting }) => {
    const handleGroupingChange = (e) => {
        setGrouping(e.target.value);
        localStorage.setItem('grouping', e.target.value);
    };

    const handleSortingChange = (e) => {
        setSorting(e.target.value);
        localStorage.setItem('sorting', e.target.value);
    };

    return (
        <div className="filter-controls">
            <label>
                Group By:
                <select value={grouping} onChange={handleGroupingChange}>
                    <option value="status">Status</option>
                    <option value="assignedUser">User</option>
                    <option value="priority">Priority</option>
                </select>
            </label>
            <label>
                Sort By:
                <select value={sorting} onChange={handleSortingChange}>
                    <option value="priority">Priority</option>
                    <option value="title">Title</option>
                </select>
            </label>
        </div>
    );
};

export default FilterControls;
