import React, {Component} from 'react';
import Folder from './Folder.jsx';
import File from './File.jsx';
import FolderContainer from './FolderContainer.jsx';
import Input from './Input.jsx';
import Filter from './Filter.jsx';


var data = [
    {
        type: "folder",
        name: "animals",
        path: "/animals",
        children: [
            {
                type: "file",
                name: "cat007.jpg",
                path: "/animals/cat/images/cat001.jpg"
            },{
                type: "folder",
                name: "cat",
                path: "/animals/cat",
                children: [
                    {
                        type: "folder",
                        name: "images",
                        path: "/animals/cat/images",
                        children: [
                            {
                                type: "file",
                                name: "cat001.jpg",
                                path: "/animals/cat/images/cat001.jpg"
                            }, {
                                type: "file",
                                name: "cat001.jpg",
                                path: "/animals/cat/images/cat002.jpg"
                            }
                        ]
                    },
                    {
                        type: "file",
                        name: "cat002.jpg",
                        path: "/animals/cat/images/cat002.jpg"
                    },
                    {
                        type: "file",
                        name: "cat003.jpg",
                        path: "/animals/cat/images/cat003.jpg"
                    }
                ]


            }
        ]
    }
];


class App extends Component {
    constructor() {
        super();
        this.state = {value: ""};
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="widget">
                <Input textValue={this.state.value} changeHandler={this.handleChange.bind(this)} />
           
                <Filter textValue={this.state.value}  data={data} />
            </div>
        );
    }
}
export default App;

