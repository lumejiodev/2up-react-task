import React, { Component } from 'react';
import Input from './input';
import AddMemberBtn from './add-member-btn';

class Form extends Component {
    render () {
        return (
            <form>
                <Input id='name' title='Имя и фамилия'/>

                <Input id='points' title='Количество очков'/>

                <AddMemberBtn />
            </form>
        );
    }
}

export default Form;