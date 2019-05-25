let id = 0;
export const addPerson = () => ({
    type: 'ADD_PERSON',
    person: {
        name: '',
        id: --id,
    }
});

export const saveAddUser = (personData) => dispatch => ({
    type: 'SAVE_ADD_USER',
    person: personData
})

export const savePerson = personData => ({
    type: 'SAVE_PERSON',
    person: personData
});

export const savePersonDataRuntime = (id, name) => ({
    type: 'CHANGE_PERSON',
    person: {
        id: id, 
        name: name
    }
});
