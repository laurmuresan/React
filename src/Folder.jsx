import React, {Component} from 'react';

class Folder extends Component {
    
    handle(element){
        element.isCollapsed = !element.isCollapsed;
        this.props.handle();
    }
    
    render() {
        
        return (
  
            <li className="folder-item true " onClick={this.handle.bind(this,this.props.name)}>  {this.props.name.name}</li>


        );
    }
}
export default Folder;
