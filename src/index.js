import React, { useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom' 

ReactDOM.render(
    <Router>
        <App />
    </Router>, document.getElementById("root"));

const initialFormValues = {
    name: '',
    size: '',
    topping1: '',
    topping2: '',
    topping3: '',
    topping4: '',
    special: '',
};

const initialFormErrors = {

};


function MyForm() {
    const [formValues, setFormValues] = useState(initialFormValues)

    const order = event => {
    }
    const change = event => {
        const {name, value, type, checked} = event.target;
        setFormValues({...formValues, [name]:value})
        const typeValue = type === 'checkbox' ? checked : value;
        change(name, typeValue)
    };

    return (
        <form id='pizza-form' onSubmit={order}>
            <label>Name:
                <input id='name-input'
                    type='text'
                    onChange={change}
                    value={formValues}
                    name='name'
                />
            </label>
            <label>Size:
                <select id='size-dropdown'
                    value={formValues.role}
                    onChange={change}
                    name='size'>
                        <option value='Select A Size'></option>
                        <option value='Large'>Large</option>
                        <option value='Medium'>Medium</option>
                        <option value='Small'>Small</option>
                </select>
            </label>
            <label>Toppings:
                <input id='toppings1'
                    type='radio'
                    name='topping1'
                    value='olive'
                    checked={formValues.topping === 'olive'}
                    onChange={change} />
                <input id='toppings1'
                    type='radio'
                    name='topping2'
                    value='meatball'
                    checked={formValues.topping === 'meatball'}
                    onChange={change} />
                <input id='toppings1'
                    type='radio'
                    name='topping3'
                    value='bacon'
                    checked={formValues.topping === 'bacon'}
                    onChange={change} />
                <input id='toppings1'
                    type='radio'
                    name='topping4'
                    value='spinach'
                    checked={formValues.topping === 'spinach'}
                    onChange={change} />
            </label>
            <label>Special Instructions:
                <input id='special-text'
                    type='text'
                    onChange={change}
                    value={formValues}
                    name='special'
                />
            </label>
            <button>Add to Order</button>
        </form>
    )
};
