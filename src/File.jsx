import React, {Component} from 'react';

export default class File extends Component {
    render() {
       var str='jpg'
        if (this.props.name.indexOf(str) >-1)
        {
        return (
            <li className="file-item">{this.props.name}</li>
        );}
        else {
            return (
                <li className="file-item imagetxt" >{this.props.name}</li>
            );}
        }

}
//export default File;
