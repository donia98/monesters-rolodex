import React from 'react';
import './Card-list.style.css';
import {Card} from '../Card/card-component';


export const CardList = (props) => {
    return(
    <div className="card-list">
        {
          props.monesters.map(monester => (
          <Card key={monester.id} monester={monester}/>
          ))
        }
    </div>
    )
};

