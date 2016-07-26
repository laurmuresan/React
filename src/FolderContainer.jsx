import React, {Component} from 'react';
import Folder from './Folder.jsx';
import File from './File.jsx';
let index=0;
class FolderContainer extends  Component{
    render()
    {
        let output=[];

        this.props.data.forEach((item)=> {
            console.log(item.type);
            if(item.type ==='folder'){
                output.push(<Folder name={item.name} key={++index} />); }
            else if (item.type ==='file'){
                output.push(<File name={item.name} key={++index} />);}

           if(item.children){
               output.push(<FolderContainer data={item.children} key={++index} />);
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