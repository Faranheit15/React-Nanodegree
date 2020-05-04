import React from 'react';
import ReactDOM from 'react-dom';

const people=[
    {name: Naruto},
    {name: Sasuke},
    {name: Sakura}
]

const element=<ol>
    <li>{people[0].name}</li>
    <li>{people[1].name}</li>
    <li>{people[2].name}</li>
</ol>

//or

const element=<ol>
    {people.map((person)=>(
        <li key={person.name}>{person.name}</li>
    ))}
</ol>

ReactDOM.render(
    element,
    document.getElementById('root')
  )