import React from 'react';
import './App.scss';
import Load from './Load';
import DatatablePage from './DatatablePage';

class App extends React.Component {
	render(){
	return (
		<main>
		<DatatablePage load='yes'/>
		<Load />
		</main>
	);
	}
}

export default App;