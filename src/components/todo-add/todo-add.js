import React from "react";

class TodoAdd extends React.Component {
    state = {
        text: ''
    }
    render() {
        return (
            <form onSubmit={(event) =>{
                event.preventDefault();
                this.props.onAdd(this.state.text)
            }}>
                <input type='text'
                value={this.state.text}
                onChange={(event) => this.setState({text:event.target.value})}
                placeholder='New problem????'
                />
                <input type='submit' value='Add here'/>
            </form>
        )
    }
}
export default TodoAdd;
