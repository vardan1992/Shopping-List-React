import React from 'react';

export default class AddListItem extends React.Component {

    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.state = {
            error: undefined
        }
    }

    addItem(e) {
        e.preventDefault();
        const item = e.target.elements.list.value.trim();

          const error =  this.props.add(item);

          this.setState(() => ({error}));
          e.target.elements.list.value= '';
        }
    render() {
        return (


            <div>
                
                    {(this.state.error && this.props.listItems.length>0) && <p className="add-list-item__errortext">{this.state.error}</p>}
                    
                        <form onSubmit={this.addItem}>
                            <div className="add-list-item">
                                <input className="add-list-item__input" type="text" name="list" placeholder="Enter Item Here"  />
                                <button className="add-list-item__button">Add Item </button>
                            </div>
                        </form>
                   
                    
                
            
                
            </div>
            
        );
    }
}
