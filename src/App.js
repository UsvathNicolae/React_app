import './App.css';
import { useState, useEffect } from "react";

const Person = (props) => {
    return(
        <>
        <h1>Name: {props.name}</h1>
        <h2>Last Name: {props.lastName}</h2>
        <h2>Age: {props.age}</h2>

        </>
    )
}

const App = ()  =>{

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        alert('Reload');
        setCounter(100);
    },[])

    const name = 'John';
    const isNameShowing = true;

  return (
    <div className="App">

        <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
        <h1>{ counter }</h1>
        <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>


      <h1>Hello { isNameShowing? name: 'there' }!</h1>
        { !isNameShowing ? (
            <>
                There is no name
            </>
        ) :(
            <>
                <Person
                    name = { 'John' }
                    lastName = { "Doe" }
                    age = { 30 }
                />
                <Person
                    name = { 'Jane' }
                    lastName = { "Doe" }
                    age = { 28 }
                />
            </>
            )}
    </div>
  );
}

export default App;
