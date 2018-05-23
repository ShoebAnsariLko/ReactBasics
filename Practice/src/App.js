import React from 'react';
import Home from './component/home'
import Header from './component/header'

class App extends React.Component {
  render() {
    let firstName=1
    return (
      <div className="App">
        <Home name={firstName}/>
        <Header/>
      </div>
    );
  }
}

export default App;
