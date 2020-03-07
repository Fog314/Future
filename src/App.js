import React from 'react';
import './App.scss';
import Loader from '../src/Loader/Loader'
import Table from './Table/Table';
import DetailRowView from '../src/DetailRowView/DetailRowView'
import _ from 'lodash';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isModeSelected: false,
			isLoading: false,
			data: [],
			sortName: '▲',
			sortField: 'id',
			row: null,
		}
	}
	
	async componentDidMount(){
	const response = await fetch('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D')
	const data = await response.json();
	this.setState({
		isLoading: false,
		data: _.orderBy(data, this.state.sortField, this.state.sort),
	})
}

onSort = (sortField)=> {
    console.log(sortField);
    const cloneData = this.state.data.concat();
    const sortType = this.state.sort === 'asc' ? 'desc' : 'asc';
    const orderedData = _.orderBy(cloneData, sortField, sortType);

    this.setState({
		data: orderedData,
		sort: sortType,
		sortField
    })
}

onRowSelect = (row) =>{
	this.setState({row})
}

render(){
	if(!this.state.isModeSelected){
		return (
		  <div className="container">
			<ModeSelector />
		  </div>
		)
	  }	  
	console.log(this.state.sortField);
	return(
		<div className = 'container'>
		{
			(this.state.isLoading)
				? <Loader />
				: <Table
				data = {this.state.data}
				onSort={this.onSort}
				sortName={this.state.sortName}
				sortField={this.state.sortField}
				onRowSelect={this.onRowSelect}
				/>
		}
		{
        this.state.row 
		? <DetailRowView person={this.state.row} /> 
		: null
      	}
		</div>
	)
}
}

export default App;