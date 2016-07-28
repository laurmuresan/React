import React, {Component} from 'react';
import Folder from './Folder.jsx';
import File from './File.jsx';
import FolderContainer from './FolderContainer.jsx';
import Input from './Input.jsx';
import Filter from './Filter.jsx';
import $ from 'jquery';

class App extends Component {

    componentDidMount(){
        $.ajax({
            url: '/src/json.js' ,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});

            }.bind(this),
            error: function(xhr, status, err) {
                console.error( status, err.toString());
            }.bind(this)
        });
    }


    constructor() {
        super();
        this.state = {value: "", data:[]};

    }

    
    handleChange(event){
        this.setState({value: event.target.value});
    }

    render() {

        if (this.state.value.length <1)
        {

            return (
                    <div className="widget">
                    <Input textValue={this.state.value} changeHandler={this.handleChange.bind(this)}/>
                    <FolderContainer data={this.state.data}/>
                    </div>
            );
        }
        else {
            return (
                <div className="widget">
                    <Input textValue={this.state.value} changeHandler={this.handleChange.bind(this)}/>

                    <Filter textValue={this.state.value} data={this.state.data}/>
                </div>
            );
        }
    }
}
export default App;

