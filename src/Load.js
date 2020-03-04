import React from 'react';

class Load extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
			error: null,
			isLoaded: false,
			items: [],
			};
		}
		
		componentDidMount() {
			fetch("http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D")
			.then(res => res.json())
			.then(
				(result) => {
				this.setState({
					isLoaded: true,
					items: result
				});
				},
				// Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
				// чтобы не перехватывать исключения из ошибок в самих компонентах.
				(error) => {
				this.setState({
					isLoaded: true,
					error
				});
				}
			)
		}
		render() {
			console.log(this.state.items);
			const { error, isLoaded, items } = this.state;
			if (error) {
			return <div>Ошибка: {error.message}</div>;
			} else if (!isLoaded) {
			return <div>Загрузка...</div>;
			} else {
				return (
					<tbody>		
					{items.map(item => (
						<tr key={item.id}>	
								<td >
									{item.id}
								</td>
								<td >
									{item.firstName}
								</td>
								<td >
									{item.lastName}
								</td>
								<td >
									{item.email}
								</td>
								<td >
									{item.phone}
								</td>
								</tr>
								))}
					</tbody>
				);
			}
		}
		}
export default Load;