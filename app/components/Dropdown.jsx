import React from "react"; 

export default function Dropdown({filters}) {
    return <div className="dropdown">
        <div className="control">
            <div className="selected-value">Sort</div>
            <div className="arrow"/>
        </div>
        <div className="options">
            {
                filters.map(filter => <div className="option">{filter.name}</div>)
            }
        </div>
    </div>
}