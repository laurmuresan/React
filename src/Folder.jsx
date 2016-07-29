import React, {Component} from 'react';

export default class Folder extends Component {
    
    handle(element){
        element.isCollapsed = !element.isCollapsed;
        this.props.handle();
    }
    
    render() {
       if (this.props.name.isCollapsed)
       {
        return (
  
            <li className="folder-item  ttrue true " onClick={this.handle.bind(this,this.props.name)}>  {this.props.name.name}</li>

        );}
        if ( !this.props.name.isCollapsed)
       {
           return (

               <li className="folder-item ffalse false " onClick={this.handle.bind(this,this.props.name)}>  {this.props.name.name}</li>

           );

       }
    }
}
//export default Folder;
