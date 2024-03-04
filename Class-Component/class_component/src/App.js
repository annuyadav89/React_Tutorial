import React from 'react';
import Car from './Car';

class App extends React.Component{
  // properties

  // constructor

//Declare state variable inside the constructor by using this keyword.
  constructor(props){
    super(props)
    this.state = {
        count : 0
    }
    // this.increaseCount = this.increaseCount.bind(this)

  
    }

    increaseCount = ()=>{
      this.setState({count: this.state.count+1})

  }

  // method

  render(){
    return(<>
       
       
      <h1>Count is :  {this.state.count}</h1>
      <button type='button' onClick={this.increaseCount}>Increase by 1</button>
      <Car model = 'Rolles Royes' />
      </>
    )
  }
}

export default App