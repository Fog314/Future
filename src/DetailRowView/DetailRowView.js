import React from 'react';

function DetailRowView(props){
    console.log(props.person);
    return(
        <div className="container">
            <p>Выбран пользователь <b>{props.person.firstName} {props.person.lastName}</b></p>
            <p>Описание:</p>
            <textarea cols='45' rows='4' value={props.person.description}>
            </textarea>
            <p>Адрес проживания: <b>{props.person.address.streetAddress}</b></p>
            <p>Город: <b>{props.person.address.city}</b></p>
            <p>Провинция/штат: <b>{props.person.address.state}</b></p>
            <p>Индекс: <b>{props.person.address.zip}</b></p>
        </div>
    )
}
export default DetailRowView;