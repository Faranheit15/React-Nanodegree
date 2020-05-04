//React is just basically Javascript. You can use all the JS functionality in React. For example, to create a list,
//do the following
const friend=['Naruto','Sasuke','Sakura'];

//either

<ul>
    <li>{friends[0]}</li>
    <li>{friends[1]}</li>
    <li>{friends[2]}</li>
</ul>

//or

<ul>
    {
        friends.map(name=>(
            <li>
                {name}
            </li>
        ))
    }
</ul>