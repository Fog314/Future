import React from 'react';
import { MDBDataTable } from 'mdbreact';
import Load from './Load';

class DatatablePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    error: null,
    isLoaded: false,
    items: [],
    sort: '',
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

  render(){

    const { error, isLoaded, items } = this.state;

    const data = {
      columns: [
        {
          label: 'id',
          field: 'id',
          sort: 'asc',
          width: 150
        },
        {
          label: 'firstName',
          field: 'firstName',
          sort: 'asc',
          width: 270
        },
        {
          label: 'lastName',
          field: 'lastName',
          sort: 'asc',
          width: 200
        },
        {
          label: 'email',
          field: 'email',
          sort: 'asc',
          width: 100
        },
        {
          label: 'phone',
          field: 'phone',
          sort: 'asc',
          width: 150
        },
      ],
      rows: []
    };

    items.map(item => (
      data['rows'].push({
        id: item.id,
        firstName: item.firstName,
        lastName: item.lastName,
        email: item.email,
        phone: item.phone,
      })
    ))
    console.log(data.columns[0].label);
    return (
      <div>
        <MDBDataTable
        striped
        bordered
        entries = {50}
        data={data}
        />
        <Load 
          data={data}
        />
      </div>
    
      
    );
  }
        
}
export default DatatablePage;