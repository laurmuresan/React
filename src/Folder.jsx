import React, {Component} from 'react';

class Folder extends Component {
    render() {
        return (
            <div>
            <li className="folder-item">{this.props.name}</li>
                </div>

        );
    }
}
export default Folder;
