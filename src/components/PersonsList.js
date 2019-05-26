import React from 'react';
import PropTypes from 'prop-types';
import PersonElement from './PersonElement';

const PersonList = ({ persons, savePerson, savePersonDataRuntime }) => {
    return (
    <div  className="challenge-person">
        { persons.map((person) => (
            <PersonElement key={person.id} {...person} 
                onClick={() => savePerson(person)}
                onChange={(event) => savePersonDataRuntime(person.id, event.target.value) }
                    />
        )) }
     </div>
)};

PersonList.propTypes = {
    persons: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string
        }).isRequired
    ).isRequired,
    onPersonSave: PropTypes.func,
    onPersonChange: PropTypes.func
};

export default PersonList;
