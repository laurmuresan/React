import React, {Component} from 'react';
import Folder from './Folder.jsx';
import File from './File.jsx';
import FolderContainer from './FolderContainer.jsx';


var data = [
    {
        type: "folder",
        name: "animals",
        path: "/animals",
        children: [
            {
                type: "file",
                name: "cat005.jpg",
                path: "/animals/cat/images/cat002.jpg"
            },
            {
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
                                name: "cat002.jpg",
                                path: "/animals/cat/images/cat002.jpg"
                            }
                        ]
                    },
                    {
                        type: "file",
                        name: "cat003.jpg",
                        path: "/animals/cat/images/cat002.jpg"
                    },
                    {
                        type: "file",
                        name: "cat004.jpg",
                        path: "/animals/cat/images/cat003.jpg"
                    }
                ]
            }
        ]
    }
];


class App extends Component {
    render() {
      return (
          <div className='widget'>
             <FolderContainer data={data} />
          </div>
    );
  }
}
export default App;

