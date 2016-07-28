import React, {Component} from 'react';
import Folder from './Folder.jsx';
import File from './File.jsx';
import FolderContainer from './FolderContainer.jsx';
let index=0;
let output=[];
class Filter extends Component{

    constructor(){
        super();
        this.state={forcedrerender:false};
    }
    
    handle(){
        this.setState({forcedrerender: !this.state.forcedrerender});
    }
    

    findmatches(data){
        
        data.forEach((item)=>{
                var str='';
                str=item.name;
                if(str.indexOf(this.props.textValue) > -1) {

                    output.push(item);
                }
                else if(item.children){
                    this.findmatches (item.children);

                }

            }
        );

    }
    render()
    {
            output=[];
        console.log(this.handle);
        this.findmatches(this.props.data);
        return (

                <FolderContainer data={output} handle={this.handle.bind(this)} />

        )

    }


}
export default Filter;