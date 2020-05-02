 function profilePic(username) {
     return(<img alt={username}
        src={'http://github.com/'+username+'.png?size=200'}/>)
 }

 function profileLinc(username) {
     return (<a href={'http://github.com/'+username}>{username}</a>)
 }

 function profile(username) {
     return (
         <div className='profile'>
            <profilePic username='username' />
            <profileLinc username='username' />
         </div>
     )
 }