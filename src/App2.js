import tool from './tool'
import React from 'react';

class App2 extends tool {
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

export default App2;
