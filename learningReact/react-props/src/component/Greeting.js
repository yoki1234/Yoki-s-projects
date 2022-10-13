import React from 'react';

const Greeting =(props)=>
{
 return (
    <div>
        <h1>
            hello {props.name} a.k.a {props.superName}
        </h1>
        {props.children}
    </div>
 ) 
    }

export default Greeting;