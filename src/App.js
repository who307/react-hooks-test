import React, { useState } from 'react';
import LoginComp from "./components/LoginComp";
import SignUp from "./components/SignUp";
import ToDoList from "./components/ToDoList";
import "./css/App.css";

function App() {
  // 로그인창 온오프
  let [login, setLogin] = useState(false);

  // 회원가입창 온오프
  let [signUp, setSignUp] = useState(false);

  // 회원가입시 입력한 데이터 객체 배열
  const [users, setUsers] = useState([]);

  // 로그인된 회원아이디 데이터 가져오기
  let [loginData, setLoginData] = useState();


  if (!login) {
    return (
      <div className="App">
        <LoginComp
          loginOpen={setLogin}
          signUpOpen={setSignUp}
          users={users}
          setLoginData={setLoginData} />

        {signUp === true && (
          <SignUp
            setUsers={setUsers}
            users={users}
            signUpOpen={setSignUp}
          />
        )}
      </div>
    )
  } else {
    return (
      <div className="container">
        <h1>Welcome to React!</h1>

        <div className="loginData">
          <span>ID : {loginData} </span>
          <span className="logoutText" onClick={() => {
            setLogin(false)
          }}>Logout</span>
        </div>
        <FuncComp initNumber={2} />
        <ClassComp initNumber={2} />
        <ToDoList />
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
