import React, { Component } from 'react';
import HeaderH2 from './h2';
import Form from './form';

class AddMember extends Component {
    render () {
        return (
            <section className="main-block add-member bg_white">

                <HeaderH2 text='Добавить участника' classes='h2 bg_green main-block__header' />

                <div className="main-block__content">

                    <Form />

                </div>

            </section>
        );
    }
}

export default AddMember;