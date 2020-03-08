import React from 'react';

class RowAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            isShow: false,
        }
    }
    
    adding(event){
        event.preventDefault();
        let tableRef = document.querySelector('table').getElementsByTagName('tbody')[0];

        // Insert a row in the table at the last row
        let newRow   = tableRef.insertRow(0);

        // Insert a cell in the row at index 0
        let newCellId  = newRow.insertCell(0);
        let newCellFirst  = newRow.insertCell(1);
        let newCellLast  = newRow.insertCell(2);
        let newCellEmail  = newRow.insertCell(3);
        let newCellPhone  = newRow.insertCell(4);

        // Append a text node to the cell
        let newTextId  = document.createTextNode(document.querySelector('input#id').value);
        newCellId.appendChild(newTextId);

        let newTextFirst  = document.createTextNode(document.querySelector('input#firstName').value);
        newCellFirst.appendChild(newTextFirst);

        let newTextLast  = document.createTextNode(document.querySelector('input#lastName').value);
        newCellLast.appendChild(newTextLast);

        let newTextEmail  = document.createTextNode(document.querySelector('input#email').value);
        newCellEmail.appendChild(newTextEmail);

        let newTextPhone  = document.createTextNode(document.querySelector('input#phone').value);
        newCellPhone.appendChild(newTextPhone);
        
    }
    render() {
        return (
            this.state.isShow === false
            ?<button onClick={()=>{this.state.isShow===false ?this.setState({isShow: true}) :this.setState({isShow: false})}}>Добавить</button>
            :<form>
            <p>
                <input style={{textAlign: 'center'}} value='id' readonly></input>
                <input style={{textAlign: 'center'}} value='firstName' readonly></input>
                <input style={{textAlign: 'center'}} value='lastName' readonly></input>
                <input style={{textAlign: 'center'}} value='email' readonly></input>
                <input style={{textAlign: 'center'}} value='phone' readonly></input>
            </p>
            <p>
            <input id='id'></input>
            <input id='firstName'></input>
            <input id='lastName'></input>
            <input id='email'></input>
            <input id='phone'></input>
            <button onClick={this.adding}>Добавить</button>
            <button onClick={()=>{this.state.isShow===false ?this.setState({isShow: true}) :this.setState({isShow: false})}}>Закрыть</button>
            </p>
            </form>
        )
    }
}

export default RowAdd;