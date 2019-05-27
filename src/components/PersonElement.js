import React from 'react';
import PropTypes from 'prop-types';

const PersonElement = ({ onClick, id, name, onChange}) =>{
    let input;
    return(
    <div className="challenge-person-element">
        <span className="challenge-person-id">
            {id}
        </span>
        <input
                className="challenge-person-name"
                onChange={onChange}
                />
        <button
                className="challenge-person-save-name-button"
                onClick={onClick} >Save Name</button>
    </div>
)};

PersonElement.propTypes = {
    onClick: PropTypes.func,
    person: PropTypes.object
}

export default PersonElement;