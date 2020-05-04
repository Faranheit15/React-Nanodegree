import React from 'react';
import ReactDOM from 'react-dom';

const element=React.createElement('ul',null,
    React.createElement('li',null,'Naruto'),
    React.createElement('li',null,'Sasuke'),
    React.createElement('li',null,'Sakura')
);

//or

const people=[
    {name: Naruto},
    {name: Sasuke},
    {name: Sakura}
]

const element=React.createElement('ol',null,
    people.map((person) => (
        React.createElement('li',{key: person.name},person.name) //js  complains if the child array component doesn't have a unique key.
    ))    
);

ReactDOM.render(
  element,
  document.getElementById('root')
)