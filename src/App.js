import React from 'react';
import AddPerson from './containers/AddPerson';
import PersonsContainer from './containers/PersonsContainer';

const App = ()=> (
    <div className="challenge">
        <AddPerson />
        <PersonsContainer />
    </div>
);

export default App;