import React, { Component } from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import Foodbox from './Components/Foodbox';
import FormFood from './Components/FormFood';
// 
class App extends Component {
  constructor(){
    super();
    this.state = {
      enableFoods: true,
      foods: afoods
    }
    addFood = (food) => {
      this.state.foods.unshift(food)
      this.setState({foods: this.state.foods, enableFoods: this.state.enableFoods})
    }
  
    AddNewFood = (food) => {
      const afoods = [...this.state.foods]
      afoods.push(food);
      this.setState({//enableFoods: !this.state.enableFoods});
      foods: afoods
    }) 
      

  }
  render() {
    return (
      foods.map((e,i) => {
        return (
          <div>
            <FormFood />
            <Foodbox name={e.name} calories={e.calories} image={e.image} quantity={e.quantity} />
          </div>
        )
      })
    );
  }
}
export default App;
}



