import React, { useState } from 'react';
import "../css/SignUp.css";

export default function SignUp(props) {

  let signUpOpen = props.signUp;

  let [conPw, setConPw] = useState();

  const confirmPw = (e) => {
    setConPw(e.target.value);
  }

  let overLap = "";

  const overLapCheck = props.users.some((overLap) => {
    return overLap.id === props.inputs.id;
  })
  const overLapCheck1 = (e) => {

    e.preventDefault();
    if (props.inputs.id === "") {
      alert("아이디를 입력하세요.");
      return;
    } if (overLapCheck || overLap === "중복") {
      alert("중복된 아이디입니다.")
      overLap = "중복";
      console.log(overLap)
      return;
    } else if (!overLapCheck) {
      alert("사용가능한 아이디입니다.")
      overLap = "사용가능";
      console.log(overLap)
    }
  }
  const signUpChecked = (e) => {
    e.preventDefault();
    if (props.inputs.id === "" || props.inputs.pw === "") {
      alert("아이디 또는 비밀번호를 입력하세요.");
      return;
    }
    if (props.inputs.pw !== conPw || conPw === "") {
      alert("비밀번호를 확인하세요.");

      return;
    } if (overLap === "중복") {
      alert("아이디를 확인하세요.")
      console.log(overLap)
    } if (overLap === "") {
      alert("아이디 중복검사를 하세요.")
      console.log(overLap)

    } else if (overLap === "사용가능") {
      alert("가입완료");
      signUpOpen(false);
      props.onCreate();
      props.inputs.id = ""
      props.inputs.pw = ""
      console.log(overLap)

    }
  }
  return (
    <div className="signUp-div">
      <span className="closeBtn" onClick={() => {
        signUpOpen(false);
        props.inputs.id = ""
        props.inputs.pw = ""
      }}>close</span>
      <span className="signUpTitle">회원가입</span>
      <form className="signUpForm">
        <div className="id-div">
          <input type="text" id="signUpId" name="id" placeholder="ID" onChange={props.onChange}></input>
          <button onClick={overLapCheck1}>중복검사</button>
        </div>
        <input type="password" id="signUpPw" name="pw" placeholder="PASSWORD" onChange={props.onChange}></input>
        <input type="password" id="confirmPw" name="confirmPw" value={conPw} placeholder="CONFIRM PASSWORD" onChange={confirmPw}></input>
        <div className="btn-div">
          <input type="button" id="signUpBtn" value="가입하기" onClick={signUpChecked}></input>
        </div>
      </form>
    </div>
  )
}