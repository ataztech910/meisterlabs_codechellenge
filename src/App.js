import React from 'react';
import AddPerson from './containers/AddPerson';
import PersonsContainer from './containers/PersonsContainer';

const App = ()=> (
    <div className="challenge">
        <h1>Person adding codechallenge</h1>
        <AddPerson />
        <PersonsContainer />
    </div>
);

export default App;