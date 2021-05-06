import React, { Component } from 'react';

class Counter extends Component {

    render() { 
        return (
            <div>
                <h4>{this.props.id}</h4>
                <span className={this.getBgClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={this.handleIncremet} 
                    className="btn btn-secondary btn-sm">Increment</button>
                <button 
                    onClick={() => this.props.onDelete(this.props.counter.id)} 
                    className="btn btn-danger btn-sm m-2">Delete</button>
            </div>);
    }

    getBgClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value: count} = this.props.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;