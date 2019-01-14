import tool from './tool'
import React from 'react';

class App extends tool {
  sayHi=()=>{
      return '222'
  };
  render() {
    return (
      <div className="App">
          {this.sayHi()}
      </div>
    );
  }
  componentDidMount(){

  }
}

export default App;
