import './App.css';
import React from "react";
import Clock from "./components/CLock";
 import TiredMeter from "./components/TiredMeter";
 import RandRoll from "./components/Username";
 import ReicpeSearch from ".components/RecipeSearch";

 export default class App extends React.Component {
  state = {
    pages: [
    <ReicpeSearch.js/>,
    <TiredMeter />,
    <Clock />,
    <RandRoll />,
    <UserName />
  ],
    curPage: 0
 };
 

 render() {
  return (
    <div className="App">
      <h1>HELLO WORLD</h1>
    <div>
    <button
      onClick={() => {
        this.swapProject(2);
      }}
    > 
    Clock
    </button>
    <button
      onClick={() => {
        this.swapProject(0);
      }}
    > 
    Recipe Search
    </button>
    </div>
    {this.state.pages[this.state.curPage]}
</div>
  );
  
 }

 swapProject(projectIndex){
  this.setState({ curPage: projectIndex});
  }
 }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello NOOOOOO!!!!! RUUUUUUNNNNNNNNNN!

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
