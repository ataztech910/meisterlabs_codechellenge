import Persons from '../utils/Persons';
const newPersons = new Persons();
const personsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SAVE_ADD_USER':
            console.log('action in reducer', action.person);
            if (!state.persons) {
                state.persons = newPersons.persons;
            }
            const result = newPersons.upsert(action.person);
            console.log('result is ', result);
            return {
                ...state,
                persons: [...state.persons, ...result.persons]
            };
        case 'ADD_PERSON':
            return state;
        case 'SAVE_UPDATE_USER':    
            console.log('save update', action);
            state.persons.map(person => {
                if (person.id === action.person.id) {
                    person.name = action.person.name;
                }
                return person;
            });
            return state;
        case 'SAVE_PERSON':
            console.log('save ', action);
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