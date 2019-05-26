import Persons from '../utils/Persons';
const newPersons = new Persons();
const personsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SAVE_ADD_USER':
            console.log('action', action);
            return state;
        case 'ADD_PERSON':
            if(!state.persons){
               state.persons = newPersons.persons;
            }
            const result = newPersons.upsert(action.person);
            return {
                ...state,
                persons: [...state.persons, ...result.persons]
            };
        case 'SAVE_PERSON':
            console.log('save ', action);
            state.persons.map(person => {
                if (person.id === action.person.id) {
                    person.name = action.person.name;
                }
                return person;
            });
            return state;
        case 'CHANGE_PERSON':
            state.persons.map(person => {
                if (person.id === action.person.id) {
                    person.name = action.person.name;
                }
                return person;
            });
            return state;
        default:
            return state;
    }
}
export default personsReducer;