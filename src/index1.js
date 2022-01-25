
/*
import React from "react";
import ReactDOM from "react-dom";

import { useState, useEffect, useRef } from "react";
import { createContext,useContext } from "react";
import { useReducer } from "react";
import Todos from "./Todos";
*/

/*
function Myform() {
    const [inputs,setInputs] = useState({});

    const handleChange = (event) => {
        const {name,value} = event.target;
        setInputs(values => ({...values,[name]:value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
       // alert(`The name is: ${name} and age: ${age}`);
        //alert(`The name you entered was: ${name}`);
    }

    return (
    <form onSubmit={handleSubmit}>
        <label>Enter Name:

            <input
                type="text"
                name="name"
                value={inputs.name || ''}
                onChange={handleChange}
            />

        </label>
        

        <label>Enter Age:

            <input
                type="nubmer"
                name="age"
                value={inputs.age    || ''}
                onChange={handleChange}
            />

        </label>



        <input type="submit"/>
    </form>
    )
}

*/

/*

function Myform() {
    const [textarea,setTextarea] = useState(
        "You can write your content here"
        );

    const handleChange = (event) => {
        setTextarea(event.target.value);
    }

    return (

        <form>

            <textarea
                name="textarea"
                value={textarea}
                onChange={handleChange}
            />

        </form>

    )

}

*/

/*

function Myform() {

    const [myCar,setMyCar] = useState("");

    const handleChange = (event) => {
        setMyCar(event.target.value);
    }

    return (
        <form>
            <select name="myCar" value={myCar} onChange={handleChange}>
                <option value="">Select a car</option>
                <option value="Ford">Ford</option>
                <option value="Chevy">Chevy</option>
                <option value="Honda">Honda</option>
            </select>
        </form>
    )
}

*/

/*

const myStyle = {
    color: "red",
    fontSize: "20px"
};


const App = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["Learn React", "Learn React Hooks"]);

    const incrementCount = () => {
        setCount((count) => count + 1);
    };


    return (
        <>
            <Todos todos={todos} />
            <hr/>
            <div>
                count: {count}
                <button style={myStyle} onClick={incrementCount}>Increment</button>
            </div>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
*/

/*

function FavoriteColor () {
    const [color, setColor] = useState("red");

    return (
        <>
            <h1>My Favorite Color is {color}</h1>
            <button
                type="button"
                onClick={() => setColor("blue")}
            >Blue</button>

            <button
                type="button"
                onClick={() => setColor("green")}
            >Green</button>

            <button
                type="button"
                onClick={() => setColor("yellow")}
            >Yellow</button>

        </>
    );
}

ReactDOM.render(<FavoriteColor />, document.getElementById("root"));
*/

/*
function Timer() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    }, []);
  
    return <h1>I have rendered {count} times!</h1>;
  }
  
  ReactDOM.render(<Timer />, document.getElementById('root'));
*/

/*

function Count() {

    const [count, setCount] = useState(0);
    const [calculate, setCalculate] = useState(0);

    useEffect(() => {
        setCalculate(count * 2);
    }, [count]);

    return (

    <>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>Increment</button>
        <h1>calculate:  {calculate}</h1>
    </>
    );
}

ReactDOM.render(<Count />, document.getElementById("root"));

*/

/*

const UserContext = createContext();


function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

ReactDOM.render(<Component1 />, document.getElementById("root"));

*/

/*
function App () {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    });

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(event)=>setInputValue(event.target.value)}
                />
                <h3>Render Count: {count.current}</h3>
        </>
    );
}   

1ReactDOM.render(<App/>, document.getElementById("root"))

*/

/*

function App () {
    
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                />

                <h2>Current value: {inputValue}</h2>
                <h2>Previous value: {previousInputValue.current}</h2>
        </>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"))

*/

/*

const initialTodos = [
    {
      id: 1,
      title: "Todo 1",
      complete: false,
    },
    {
      id: 2,
      title: "Todo 2",
      complete: false,
    },
  ];
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "COMPLETE":
        return state.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, complete: !todo.complete };
          } else {
            return todo;
          }
        });
      default:
        return state;
    }
  };
  
  function Todos() {
    const [todos, dispatch] = useReducer(reducer, initialTodos);
  
    const handleComplete = (todo) => {
      dispatch({ type: "COMPLETE", id: todo.id });
    };
  
    return (
      <>
        {todos.map((todo) => (
          <div key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleComplete(todo)}
              />
              {todo.title}
            </label>
          </div>
        ))}
      </>
    );
  }
  
  ReactDOM.render(<Todos />, document.getElementById("root"));

  */

    /*
  const App = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
  
    const increment = () => {
      setCount((c) => c + 1);
    };
    const addTodo = () => {
      setTodos((t) => [...t, "New Todo"]);
    };
  
    return (
      <>
        <Todos todos={todos} addTodo={addTodo} />
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
        </div>
      </>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById('root'));

  */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './log/App';
 
ReactDOM.render(<App />, document.getElementById('root'));