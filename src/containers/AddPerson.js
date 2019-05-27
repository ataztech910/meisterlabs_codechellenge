import React from 'react';
import { connect } from 'react-redux';
import { addPerson } from '../actions';

const AddPerson = ({dispatch}) => {
    return (
        <div className="challenge-create-person-button"
            onClick={event=>{
                event.preventDefault();
                dispatch(addPerson({name: '',id: -1}));
            }
        }>Create Person<div></div></div>
    );
};

export default connect()(AddPerson);
// export default AddPerson;