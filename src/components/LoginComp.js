import React, { useState } from 'react';
import "../css/LoginComp.css";

export default function LoginComp(props) {

  let [id, setId] = useState();
  let [pw, setPw] = useState();

  const idChange = (e) => {
    setId(e.target.value);
  }
  const pwChange = (e) => {
    setPw(e.target.value);
  }

  const loginChecked = () => {

    const loginCheck = props.users.some((result) => (result.id === id && result.pw === pw));

    let loginData = props.users.map((result) => {
      if (result.id === id && result.pw === pw) {
        return result.id;
      }
    }).join(""); 
    if (!id || !pw) {
      alert("아이디 또는 비밀번호를 입력하시오.");
      return;
    }
    if (loginCheck) {
      alert(`환영합니다. ${loginData} 님`);
      props.setLoginData(loginData)
      props.loginOpen(true);
    }
    else {
      alert("아이디와 비밀번호가 올바르지 않습니다.");
      setPw("");
    }
  }
  const signOpen = () => {
    props.signUpOpen(true);
  }

  return (
    <div className="login-container">
      <div className="login-div">
        <div className="login-wrap">
          <span className="loginTitle">로그인</span>
          <input type="text" id="id" name="Id" placeholder="id" onChange={idChange}></input>
          <input type="password" id="pw" name="Pw" placeholder="password" onChange={pwChange}></input>
          <div className="btn-div">
            <input type="button" id="btn" value="로그인" onClick={loginChecked} ></input>
            <input type="button" id="btn" value="회원가입" onClick={signOpen} ></input>
          </div>
        </div>
      </div>
    </div>
  )
}