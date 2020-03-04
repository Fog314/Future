import React from 'react';
import './App.scss';
import Load from './Load';
import Test from './Test';


class App extends React.Component {
	render(){
	return (
		<main>
			<div>Hello</div>
			<table className="sortable">
					<thead>
						<tr>
							<th>id</th>
							<th>firstName</th>
							<th>lastName</th>
							<th>email</th>
							<th>phone</th>
						</tr>
					</thead>
					<Load />
				</table>
		</main>	
	);
	}
}

export default App;