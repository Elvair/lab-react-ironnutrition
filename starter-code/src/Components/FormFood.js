import React from 'react';
import foods from '../foods.json';
import Foodbox from './Foodbox';

export default class FormFood extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            name: "",
            calories: "",
            image: ""
        }
    }
    handleSubmit() {
        let {name,calories, image} = this.state;
        if (name === "") return this.setState({ error: "Missing a name" });
        if (calories === "") return this.setState({ error: "Missing a calories" });
        if (image === "") return this.setState({ error: "Missing an image" });
        this.setState();
        this.props.addFood({name, calories,image});

    }
    render() {
        let {name,calories, image,} = this.state;
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label for="name">Name</label>
                    <input name="name" type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
                    <label for="calories">Calories</label>
                    <input name="calories" type="number" value={this.state.calories} onChange={(e) => this.setState({calories: e.target.value})}/>
                    <label for="image">Image</label>
                    <input name="image" type="file" value={this.state.image} onChange={(e) => this.setState({image: e.target.value})}/>
                    <button onClick={this.handleSubmit.bind(this)}>Add new food</button>
                </form>
            </div>

        )
    }
} 
  
// addNewFood = food => {
    // const _foods = [...this.state.foods] //se hace así para que haga una copia.
    // _foods.push(food) // o pudes cambiarlo por unshift() para que lo añada al principio para verlo directamente.
    // this.setState({
    //   foods: _foods
    // });
//  };