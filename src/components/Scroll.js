import React from "react";

//Thanks to children in React, we can use component that wrap other components, this way we can make an element scrollable without having to add a div with a scrollable style to each component that we want to be scrollable.
const Scroll = (props) => {
    return (
        <div style={{overflow: "scroll", border: "1px solid black", height: "80vh"}}>
            {props.children};
        </div>
    )
}

export default Scroll;