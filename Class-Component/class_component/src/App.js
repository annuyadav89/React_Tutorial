import React from 'react';

class App extends React.Component{
  // properties

  // constructor

//Declare state variable inside the constructor by using this keyword.
  constructor(){
    super()
    this.state = {
        count : 0
    }
  }

  // method

  render(){
    return(<>
       
       
      <h1>Count is :  {this.state.count}</h1>
      </>
    )
  }
}

export default App