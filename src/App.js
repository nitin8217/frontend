import React, { useState } from "react";
import JsonInput from "./components/JsonInput.js";
import ResponseDisplay from "./components/ResponseDisplay.js";

function App() {
    const [response, setResponse] = useState(null);

    return (
        <div>
            <h1>BFHL Challenge</h1>
            <JsonInput setResponse={setResponse} />
            {response && <ResponseDisplay response={response} />}
        </div>
    );
}

export default App;
