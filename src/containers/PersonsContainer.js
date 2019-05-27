import { connect } from 'react-redux'
import PersonsList from '../components/PersonsList';
import { savePerson, savePersonDataRuntime } from '../actions';

const getPersons = (persons, request)=>{
    switch (request) {
        case 'GET_ALL':
            return persons;
        default: return persons || [];  
        //This part is for future scaling of application. Right now it looks to heavy
        //for one to action point. But in future it will be helpful    
    }
}

const mapStateToProps = state => ({
        persons: getPersons(state.persons, state.request)
});

const mapDispatchToProps = dispatch => ({
    savePerson: person => {
        dispatch(savePerson(person));
    },
    savePersonDataRuntime: (id, event) => dispatch( savePersonDataRuntime(id, event) )
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonsList);
