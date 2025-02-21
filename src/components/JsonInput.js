import React, { useState } from "react";
import { fetchData } from "../utils/api";

const JsonInput = ({ setResponse }) => {
    const [jsonInput, setJsonInput] = useState("");

    const handleSubmit = async () => {
        try {
            const parsedData = JSON.parse(jsonInput);
            const res = await fetchData(parsedData);
            setResponse(res);
        } catch (error) {
            alert("Invalid JSON Format");
        }
    };

    return (
        <div>
            <textarea
                rows="5"
                placeholder='Enter JSON (e.g., { "data": ["A", "1", "Z"] })'
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default JsonInput;
