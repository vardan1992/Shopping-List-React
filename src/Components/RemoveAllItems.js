import React from 'react';

const RemoveAllItems = (props) => 
         (
            <div >
            
                <button disabled={props.listItems.length === 0} className="widget_header" onClick = {props.removeAll}>Remove All Items</button>
            
        
            
        </div>
            
            
        );
    
export default RemoveAllItems;