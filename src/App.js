import './App.css';

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

    const name = 'John';
    const isNameShowing = true;

  return (
    <div className="App">
      <h1>Hello { isNameShowing? name: 'there' }!</h1>
        { !name ? (
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
