import React from 'react';
import ListItem from './ListItem';

const List = (props) => (
            
            <div>
                
                    <ul>
                    {props.listItems.map((li,index) => {
                        return <ListItem key={index} list = {li} removeIndividualItem={props.removeIndividualItem} />
                    })}
                    </ul>
                    
            
                
            </div>
        );
    
export default List;