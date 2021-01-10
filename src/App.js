import React, { useState } from 'react';
import LoginComp from "./components/LoginComp";
import SignUp from "./components/SignUp";
import ToDoList from "./components/ToDoList";
import "./css/App.css";

function App() {

  let [login, setLogin] = useState();
  let [signUp, setSignUp] = useState();

  const [users, setUsers] = useState([]);

  const [inputs, setInputs] = useState({
    id: "",
    pw: "",
  });

  const onChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const onCreate = () => {
    const user = {
      userNum: users.length + 1,
      id: inputs.id,
      pw: inputs.pw,

    };
    setUsers([...users, user]);
  };

  if (!login) {
    return (
      <div className="App">
        <LoginComp
          login={setLogin}
          signUp={setSignUp}
          users={users} />

        {signUp === true && (
          <SignUp
            onChange={onChange}
            onCreate={onCreate}
            users={users}
            inputs={inputs}
            signUp={setSignUp}/>
        )}
      </div>
    )
  } else {
    return (
      <div className="container">
        <h1>Welcome to React!</h1>
        <h1 className="logout" onClick={() => {
          setLogin(false)
        }}>logout</h1>
        <FuncComp initNumber={2}/>
        <ClassComp initNumber={2}/>
        <ToDoList/>
      </div>
    );
  }
}

function FuncComp(props) {
  let numberState = useState(props.initNumber);
  let number = numberState[0];
  let setNumber = numberState[1];

  // let dateState = useState((new Date()).toString());
  // let _date = dateState[0];
  // let setDate = dateState[1];
  let [_date, setDate] = useState((new Date()).toString());
  return (
    <div className="container">
      <h2>function style Component</h2>
      <p>Number : {number}</p>
      <p>Date : {_date}</p>
      <input type="button" value="random" onClick={
        function () {
          setNumber(Math.ceil(Math.random() * 100));
        }
      }></input>
      <input type="button" value="date" onClick={
        function () {
          setDate((new Date()).toString());
        }
      }></input>
    </div>
  );
}
class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: (new Date()).toString()
  }
  render() {
    return (
      <div className="container">
        <h2> class style Component </h2>
        <p> Number : {this.state.number}</p>
        <p> Date : {this.state.date}</p>

        <input type="button" value="random" onClick={
          () => {
            this.setState({ number: Math.ceil(Math.random() * 100) })
          }
        }></input>
        <input type="button" value="date" onClick={
          function () {
            this.setState({ date: (new Date()).toString() })
          }.bind(this)
        }></input>

      </div>
    )
  }
}

export default App;
