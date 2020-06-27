import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            location: '',
            diet1: '',
            diet2: '',
            diet3: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleChecked = this.handleChecked.bind(this)
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })           
    }
    
    handleChecked = (event) => {
        this.setState({
            [event.target.name]: event.target.checked
        }) 
    }
    
    render() {
        return (
            <main>
                <form>
                    <input 
                        type="text"
                        name="firstName" 
                        onChange={this.handleChange} 
                        placeholder="First Name" 
                    />
                    <br />
                    <input 
                        type="text"
                        name="lastName" 
                        onChange={this.handleChange} 
                        placeholder="Last Name" 
                    />
                    <br />
                    <input 
                        type="text"
                        onChange={this.handleChange}
                        name="age"
                        placeholder="Age" 
                    />
                    <br />
                    
                    Gender: &nbsp;
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="Male"
                            checked={this.state.gender === "Male"}
                            onChange={this.handleChange}
                        /> Male
                    </label>
                    &nbsp;
                    <label>
                        <input 
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={this.state.gender === 'Female'}
                            onChange={this.handleChange}
                        /> Female
                    </label>
                    <br />
                    
                    <label>
                        Location: &nbsp;
                        <select
                            value={this.state.location}
                            name="location"
                            onChange={this.handleChange}
                        >
                            <option value="" disabled>Choose Location</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="India">India</option>
                            <option value="Bangladesh">Bangladesh</option>
                        </select>
                    </label>
                    <br />
                    
                    Diet: <br />
                    <label>
                        <input 
                            type="checkbox"
                            name="diet1"
                            checked={this.state.diet1}
                            onChange={this.handleChange}
                        /> Vegetarian
                    </label>
                    &nbsp;
                    <label>
                        <input 
                            type="checkbox"
                            name="diet2"
                            checked={this.state.diet2}
                            onChange={this.handleChange}
                        /> Kosher
                    </label>
                    &nbsp;
                    <label>
                        <input 
                            type="checkbox"
                            name="diet3"
                            checked={this.state.diet3}
                            onChange={this.handleChange}
                        /> Lactose Free
                    </label>
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.location}</p>
                <>
                    Your dietary restrictions: 
                    <ul>
                        <li>Vegetarian: {this.state.diet1 ? "Tick" : ""}</li>
                        <li>Kosher: {this.state.diet2 ? "Tick" : ""}</li>
                        <li>Lactose Free: {this.state.diet3 ? "Tick" : ""}</li>
                    </ul>
                </>
            </main>
        )
    }
}

export default App
