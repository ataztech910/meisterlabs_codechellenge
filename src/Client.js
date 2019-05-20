import React, { Component } from 'react';
import Persons from './utils/Persons';
import Server from './Server';


let id = 0;

export default class Client extends Component {
    constructor() {
        super();

        this.debounceTime = 300;

        this.state = {
            persons: new Persons(),
            counters: []
        };
    }

    createPerson() {
        const person = {
            name: '',
            id: --id,
        };
        // this.setState(state => ({
        //     persons: state.persons.add(person),
        // }));
        this.savePerson(person);
    }

    onClickCreatePerson = () => {
        this.createPerson();
    }

    onClickSaveName(person) {
        const currentValue = { key : person.id, action: 'working' };
        this.state.counters.push(currentValue);
        this.setState(state => ({
            counters: this.state.counters
        }));
        this.savePerson(person);
    }

    onChangeName(person, event) {
        const name = event.target.value;

        this.setState(state => ({
            persons: state.persons.update({
                ...person,
                name,
            }),
        }));
    }

    savePerson(person) {
        const isCreate = person.id < 0;
        const method = isCreate
            ? 'post'
            : 'patch';
        Server[method](person).then(this.onSaveSuccess);
    }

    onSaveSuccess = person => {
        let check = this.state.counters.filter(element => element.key === person.id);
        if (check && check.length > 0) {
            check.shift();
            const noID = this.state.counters.filter(element => element.key !== person.id);
            this.setState({ counters: [...noID, ...check] });
        }
        setTimeout(()=>{
            if (this.state.counters.filter(element=>element.key === person.id).length>0){
                console.log('halt');
            }else{
                this.setState(state => ({
                    persons: state.persons.upsert(person),
                }));
            }
        },this.debounceTime);
    }

    renderPersons() {
        return this.state.persons
            .get()
            .map(person => (
                <div key={person.id} className="challenge-person">
                    <span className="challenge-person-id">
                        {person.id}
                    </span>
                    <input
                        value={person.name}
                        className="challenge-person-name"
                        onChange={event => this.onChangeName(person, event)}
                    />
                    <button
                        className="challenge-person-save-name-button"
                        onClick={() => this.onClickSaveName(person)}
                    >
                        Save Name
                    </button>
                </div>
            ));
    }

    render() {
        return (
            <div className="challenge">
                <button
                    className="challenge-create-person-button"
                    onClick={this.onClickCreatePerson}
                >
                    Create Person
                </button>
                <div className="challenge-persons">
                    {this.renderPersons()}
                </div>
            </div>
        );
    }
}