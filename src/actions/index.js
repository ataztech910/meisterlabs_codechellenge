export const addPerson = () => ({
    type: 'ADD_PERSON',
    id: -1
});

export const savePerson = person => ({
    type: 'SAVE_PERSON',
    id: person.id,
    name: person.name
});
