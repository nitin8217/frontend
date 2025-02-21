import React, { useState } from "react";

const ResponseDisplay = ({ response }) => {
    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleFilterChange = (e) => {
        const { value, checked } = e.target;
        setSelectedFilters((prev) =>
            checked ? [...prev, value] : prev.filter((filter) => filter !== value)
        );
    };

    return (
        <div>
            <h2>Filters</h2>
            <label>
                <input type="checkbox" value="numbers" onChange={handleFilterChange} /> Numbers
            </label>
            <label>
                <input type="checkbox" value="alphabets" onChange={handleFilterChange} /> Alphabets
            </label>
            <label>
                <input type="checkbox" value="highest_alphabet" onChange={handleFilterChange} /> Highest Alphabet
            </label>

            <h2>Response</h2>
            {selectedFilters.includes("numbers") && response?.numbers && (
                <p>Numbers: {response.numbers.join(", ")}</p>
            )}
            {selectedFilters.includes("alphabets") && response?.alphabets && (
                <p>Alphabets: {response.alphabets.join(", ")}</p>
            )}
            {selectedFilters.includes("highest_alphabet") && response?.highest_alphabet && (
                <p>Highest Alphabet: {response.highest_alphabet}</p>
            )}
        </div>
    );
};

export default ResponseDisplay;
