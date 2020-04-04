
import React from 'react';
import './card.styles.css';


export const Card = (props) => {
    return (
        <div className="card-container ">
            <img alt="monester" src={`https://robohash.org/${props.monester.id}?set=set2&size=180x180`}
            />
            <h2 key={props.monester.id}>{props.monester.name}</h2>
            <p>{props.monester.email}</p>
        </div>
    )
};
