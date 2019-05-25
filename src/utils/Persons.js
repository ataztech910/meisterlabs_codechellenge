export default class Persons {
    constructor(state = []) {
        this.persons = state;
    }

    get() {
        return this.persons;
    }

    indexOf(person) {
        return this.persons.findIndex(entry => entry.id === person.id);
    }

    has(person) {
        return this.indexOf(person) > -1;
    }

    update(person) {
        const state = this.get().map(entry => {
            return entry.id === person.id
                ? person
                : entry;
        });
        return new Persons(state);
    }

    add(person) {
        return new Persons([...this.get(), person]);
    }

    upsert(person) {
        return this.has(person)
            ? this.update(person)
            : this.add(person);
    }
}