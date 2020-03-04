import React from 'react';
import './App.scss';
import Load from './Load';
import Test from './Test';


class App extends React.Component {
	render(){
	return (
		<main>
			<div>Hello</div>
			<table id="grid" 
			className="table table-condensed table-hover table-striped"
			data-toggle="bootgrid">
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