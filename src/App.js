import React, { Component } from 'react';
import LeaderBoardTask from "containers/LeaderBoardTask";

//style
import 'css/App.css';

class App extends Component {
  render() {
	return (
	  <div className="App">
		<LeaderBoardTask></LeaderBoardTask>
	  </div>
	);
  }
}

export default App;
