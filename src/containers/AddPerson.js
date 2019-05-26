import React from 'react';
import { connect } from 'react-redux';
import { addPerson } from '../actions';
import Server from '../Server';

const AddPerson = ({dispatch}) => {
    return (
        <button className="challenge-create-person-button"
            onClick={event=>{
                event.preventDefault();
                Server['post']({
                    name: '',
                    id: -1}).then((result)=>{
                    console.log('result ',result);
                    dispatch(addPerson(result));
                });
            }}>Create Person</button>
    );
};

export default connect()(AddPerson);
// export default AddPerson;