import React, {Component} from 'react';
class Input extends Component {
    constructor() {
        super();
        this.state = {value: ""};
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }


    render()
    {
        return (
            <div className="widget">
            <input placeholder='filter...' type="text"
                   value={this.state.value}
                   onChange={this.handleChange.bind(this)} />
                <p>
                    { this.state.value ?  " Searching for : " + this.state.value : null}
                </p>
                </div>
        );}

}
export default Input;
