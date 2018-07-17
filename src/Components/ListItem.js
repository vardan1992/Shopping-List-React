import React from 'react';

const ListItem = (props) => (
            <div className="list-item">
                <li className="list-item__text">{props.list} </li>
                <button className="list-item__button" onClick = {(e) => {
                    props.removeIndividualItem(props.list);
                }}>Remove</button>
            </div>
            
        );
    
export default ListItem;