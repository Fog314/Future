import React from 'react';

class Load extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			items: [],
			generalTextContent: ['id', 'firstName', 'lastName', 'email', 'phone'],
		};
	}

	componentDidMount() {
			let th = document.querySelectorAll('th');
			for (let item of th){
				item.addEventListener('click',()=>{
				let i = 0;
				for (let item of th){
					if (item.classList.contains('sorting')){
						item.textContent = this.state.generalTextContent[i];
						i++;
						console.log('helo');
					}
				}
				if (item.textContent.slice(-1) !== '▼' && item.textContent.slice(-1) !== '▲'){
					item.textContent = item.textContent + ' ▲';
				} else if (item.textContent.slice(-1) === '▲'){
					item.textContent = item.textContent.slice(0,-1) + '▼';
				} else if (item.textContent.slice(-1) === '▼'){
					item.textContent = item.textContent.slice(0,-1) + '▲';
				}
				})
			}
	}
	render() {

		return (
			<div>Hello</div>
		);
	}
}
export default Load;