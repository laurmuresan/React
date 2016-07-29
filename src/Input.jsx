import React, {Component} from 'react';
export default class Input extends Component {


    render()
    {
        return (
            <div className="widget">
                <input placeholder='filter...' type="text"
                      value={this.props.textValue}
                       onChange={this.props.changeHandler} />
                <p>
                    { this.props.textValue ?  " Searching for : " + this.props.textValue : null}
                </p>
            </div>
        );}

}
//export default Input;
