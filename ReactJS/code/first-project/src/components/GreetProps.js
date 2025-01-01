import React from "react";

// function Greet(){
//     return <h1>Hello Nithiy</h1>
// }

//Above function can be written as below format.
const GreetProps = (props) => {
    console.log(props)
    return (
        <div>
            <h1>hello {props.name} , a.k.a {props.heroName}</h1>
            {props.children}
        </div>
    )
}

export default GreetProps;