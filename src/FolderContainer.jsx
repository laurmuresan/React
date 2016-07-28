import React, {Component} from 'react';
import Folder from './Folder.jsx';
import File from './File.jsx';
let index=0;
class FolderContainer extends  Component{
    render()
    {
        let output=[];

        this.props.data.forEach((item)=> {
            if(item.type ==='folder'){
                output.push(<Folder name={item} key={++index}  handle={this.props.handle}/>);
                console.log(this.props.handle);}

            else if (item.type ==='file'){
                output.push(<File name={item.name} key={++index} />);}

            if(item.children && !item.isCollapsed ){
                output.push(<FolderContainer data={item.children} handle={this.props.handle} key={++index} />);
            }

        });
        return (
            <ul>
                {output}
            </ul>
        )
    }
}
export default FolderContainer;