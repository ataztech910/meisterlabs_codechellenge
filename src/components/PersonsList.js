import React from 'react';
import PropTypes from 'prop-types';
import PersonElement from './PersonElement';

const PersonList = ({ persons, onPersonSave }) => (
    <div  className="challenge-person">
        {persons.map((person) => (
            <PersonElement key={person.id} {...person} onClick={() => onPersonSave(person.id)}/>
        ))};
     </div>
);

PersonList.propTypes = {
    persons: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onPersonSave: PropTypes.func.isRequired
};

export default PersonList;
