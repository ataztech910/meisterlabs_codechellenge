import React from 'react'
import { connect } from 'react-redux'
import { addPerson } from '../actions';

let AddPerson = ({ dispatch }) => {
    return (
        <button
            className="challenge-create-person-button"
            onClick={ e => {
                e.preventDefault()
                dispatch(addPerson())
            }}
        >Create Person</button>
    );
};

AddPerson = connect()(AddPerson);
export default AddPerson;