import React, { useState } from 'react';
import "../css/SignUp.css";

export default function SignUp(props) {

  let conPw;
  let signUp = props.signUp;

  const confirmPw = (e) => {
    conPw = e.target.value;
  }
  const signUpChecked = () => {
    if(!props.id || !props.pw){
      alert("아이디 또는 비밀번호를 입력하시오.");
      return;
    }
    if (props.pw !== conPw) {
      alert("비밀번호를 확인하세요.");
    }else{
      alert("가입완료");
      signUp(false);
    }
  }
  return (
    <div className="signUp-div">
      <span className ="closeBtn" onClick ={()=>{
        signUp(false);
      }}>close</span>
      <span className ="signUpTitle">회원가입</span>
      <input type="text" id="signUpId" name="id" placeholder="ID" value={props.id} onChange={props.setId}></input>
      <input type="password" id="signUpPw" name="pw" value={props.pw} placeholder="PASSWORD" onChange={props.setPw} ></input>
      <input type="password" id="confirmPw" name="confirmPw" placeholder="CONFIRM PASSWORD" onChange={confirmPw}></input>
      <div className="btn-div">
        <input type="button" id="signUpBtn" value="가입하기" onClick={signUpChecked}></input>
      </div>
    </div>
  )
}