import React from "react";

function App2(props) {
    return (
        <div>
            {String(props.date).slice(0,24)}
        </div>
    );
}

export default App2;
