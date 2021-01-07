import React, { useState } from 'react';
import LoginComp from "./components/LoginComp";
import SignUp from "./components/SignUp";
import "./css/App.css";

function App() {

  let [id, setId] = useState();
  let [pw, setPw] = useState();
  let [login, setLogin] = useState();
  let [signUp, setSignUp] = useState();

  const singUpId = (e) => {
    setId(e.target.value);
  };
  const singUpPw = (e) => {
    setPw(e.target.value);
  };
  
  if (!login) {
    return (
      <div className="App">
        <LoginComp
          login={setLogin}
          signUp={setSignUp}
          id={id}
          pw={pw}>
        </LoginComp>
        {signUp === true && (
          <SignUp
            id={id}
            pw={pw}
            setId={singUpId}
            setPw={singUpPw}
            signUp={setSignUp}>
          </SignUp>
        )}
      </div>
    )
  } else {
    return (
      <div className="container">
        <h1>Welcome to React!</h1>
        <h1 className ="logout" onClick = {() =>{
          setLogin(false)
        }}>logout</h1>
        <FuncComp initNumber={2}></FuncComp>
        <ClassComp initNumber={2}></ClassComp>
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
      <p>Number : {_date}</p>
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
