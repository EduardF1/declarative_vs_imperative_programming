import React, { useState } from "react";

function App() {
    // Example of declarative approach/programming, the imperative approach is to
    // explicitly update the UI based on a triggered event.
    // - monitor the value of `state` and handle the UI accordingly
    const [state, setState] = useState(false);

    function strike() {
        return setState(true);
    }

    function unStrike() {
        return setState(false);
    }

    return (
        <div>
            <p style={state ? { textDecoration: "line-through" } : {}}>
                Buy milk
            </p>
            <button onClick={strike}>Change to strike through</button>
            <button onClick={unStrike}>Change back</button>
        </div>
    );
}

export default App;