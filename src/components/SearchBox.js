import React from "react";

//this function allow us to create a search box that will filter the robots array based on the input
const SearchBox = ({searchChange}) => {
    return (
        <input 
            className="pa3 ba b--green bg-lightest-blue"
            type="search" 
            placeholder="search robots"
            //onchange is an event listener that will call the searchChange function when the input field changes
            onChange={searchChange}
        />
    );
}

export default SearchBox;