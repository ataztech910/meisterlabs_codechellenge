import React from 'react';
import { connect } from 'react-redux';
import { addPerson } from '../actions';

const AddPerson = ({dispatch}) => {
    return (
        <button className="challenge-create-person-button"
            onClick={event=>{
                event.preventDefault();
                dispatch(addPerson());
            }}>Create Person</button>
    );
};

export default connect()(AddPerson);
// export default AddPerson;