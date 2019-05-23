import React from 'react';
import PropTypes from 'prop-types';

const PersonElement = ({ onClick, person, onChange }) =>(
    <div>
        <span className="challenge-person-id">
            {person.id}
        </span>
        <input
                value={person.name}
                className="challenge-person-name"
                onChange={onChange(person, this.value)} />
        <button
                className="challenge-person-save-name-button"
                onClick={onClick} >Save Name</button>
    </div>
);

PersonElement.propTypes = {
    onClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    person: PropTypes.object.isRequired
}

export default PersonElement;