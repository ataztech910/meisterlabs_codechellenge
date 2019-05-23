import { connect } from 'react-redux'
import { savePerson } from '../actions';
import PersonsList from '../components/PersonsList';

const getPersons = (persons, request)=>{
    switch (request) {
        case 'GET_ALL':
            return persons;
        default: return false;    
        //This part is for future scaling of application. Right now it looks to heavy
        //for one to action point. But in future it will be helpful    
    }
}

const mapStateToProps = state => {
    return {
        persons: getPersons(state.persons, state.request)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSavePerson: person => {
            dispatch(savePerson(person))
        }
    }
}

const PersonsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonsList);

export default PersonsContainer;