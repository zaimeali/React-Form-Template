import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    
    render() {
        return (
            <form>
                <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange} 
                />
                <br />
                <input 
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange} 
                />
                <br />
                <input 
                    type="number"
                    value={this.state.age}
                    name="age"
                    placeholder="age"
                    onChange={this.handleChange}
                />
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h3>My Age is: {this.state.age}</h3>
            </form>
        )
    }
}

export default App
