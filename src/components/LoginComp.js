import React, { useState } from 'react';
import "../css/LoginComp.css";

export default function LoginComp(props) {
  const users = {
    id: props.id,
    password: props.pw
  }
  let [id, setId] = useState();
  let [pw, setPw] = useState();

  let login = props.login;
  let signUp = props.signUp;

  const idChange = (e) => {
    setId(e.target.value);
  }
  const pwChange = (e) => {
    setPw(e.target.value);
  }

  const loginChecked = () => {
    if (!id || !pw) {
      alert("아이디 또는 비밀번호를 입력하시오.");
      return;
    }
    if (id === users.id && pw === users.password) {
      alert("로그인 성공!");
      login(true);
    } else {
      alert("아이디와 비밀번호를 확인하세요.");
      setPw("");
    }
  }
  const signUpOpen = () => {
    signUp(true);
  }

  return (
    <div className="login-container">
      <div className="login-div">
        <div className="login-wrap">
          <span className="loginTitle">로그인</span>
          <input type="text" id="id" name="Id" placeholder="id" value={id} onChange={idChange}></input>
          <input type="password" id="pw" name="Pw" placeholder="password" value={pw} onChange={pwChange}></input>
          <div className="btn-div">
            <input type="button" id="btn" value="로그인" onClick={loginChecked} ></input>
            <input type="button" id="btn" value="회원가입" onClick={signUpOpen} ></input>
          </div>
        </div>
      </div>
    </div>
  )
}