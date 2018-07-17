import React from 'react';
import RemoveAllItems from './RemoveAllItems';
import AddListItem from './AddListItem';
import List from './List';
import Header from './Header';


export default class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.removeIndividualItem = this.removeIndividualItem.bind(this);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        try {
            const list = JSON.parse(localStorage.getItem("list"));
        if(list) {
            this.setState(() =>  ({ list }));
        }
        } catch(e) {
            // do nothing
        }
       
      
    }

    componentDidUpdate() {
        localStorage.setItem("list", JSON.stringify(this.state.list));
    }
    
      removeIndividualItem(item) {
          
          this.setState((prevState) => {
              return {
                  list: prevState.list.filter((li) => {
                        return li !== item;
                  })
              }
          })
      }

     handleRemoveAll() {
         this.setState(() => {
             return {
                 list: []
             }
         });
     }
    handleAddItem(item) {
        if(!item) {
            return 'Enter a Valid Item !!';
        } else if(this.state.list.indexOf(item) > -1){
            return 'Item Already Exists !!';
        }
        this.setState((prevState) => {
            return {
                list: prevState.list.concat(item)
            };
        });
    }
    render() {
        const title = 'Shopping List';
        const subTitle = 'Shop Like A Boss';
        console.log(this.state.list)
        return (
            <div>
                <Header title = {title} subTitle = {subTitle} />
                <div className="container">
                    <div className="widget">
                    <RemoveAllItems listItems = {this.state.list} removeAll = {this.handleRemoveAll} />
                    <List listItems = {this.state.list} removeIndividualItem ={this.removeIndividualItem} />
                    <AddListItem add={this.handleAddItem} listItems = {this.state.list}  />
                </div>
            
                
                </div>
                
            </div>
        );
    }
}