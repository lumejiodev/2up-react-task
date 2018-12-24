import React, { Component } from 'react';
import Panel from './components/left-panel';
import AddMember from './components/add-member';

class App extends Component {
	render() {
		return (
			<main className="App bg_gl">

                <div className="container">
				    <Panel/>

                    <div className="main">

                        <AddMember />
                    
                    </div>
                
                </div>
			
			</main>
		);
	}
}

export default App;
