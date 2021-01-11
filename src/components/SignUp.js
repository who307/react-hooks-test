import React, { useState } from 'react';
import "../css/SignUp.css";

export default function SignUp(props) {

  // 인풋에 입력한 데이터 가져오기
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
    console.log(`over : ${overLap}`)
  };

  // 회원가입시 입력한 데이터 객체 배열 생성
  const onCreate = () => {
    const user = {
      userNum: props.users.length + 1,
      id: inputs.id,
      pw: inputs.pw,
    };
    props.setUsers([...props.users, user]);
  };
  let overLap = true;
  // App컴포넌트에서 유저정보를 props로 전달받아 입력한 아이디 값과 props의 아이디값이 중복되는지 체크
  const overLapCheck =props.users.some((result) => {
    return result.id === inputs.id;
  })
  // 비밀번호 확인
  let [conPw, setConPw] = useState();
  const confirmPw = (e) => {
    e.preventDefault();
    setConPw(e.target.value);
  }
  const overLapCheck1 = (e) => {
    e.preventDefault();
    if (inputs.id === "") {
      alert("아이디를 입력하세요.");
      return;
    } if (overLapCheck) {
      alert("이미 존재하는 아이디입니다.")
      overLap = true;
      console.log(`over : ${overLap}`)
      return;
    } else if (!overLapCheck) {
      alert("사용가능한 아이디입니다.")
      overLap = false;
      console.log(`over : ${overLap}`)
    }
  }
  const signUpChecked = (e) => {
    e.preventDefault();
    if (inputs.id === "" || inputs.pw === "") {
      alert("아이디 또는 비밀번호를 입력하세요.");
      return;
    }
    if (inputs.pw !== conPw || conPw === "") {
      alert("비밀번호를 확인하세요.");
      return;
    }if (overLap === true) {
      alert("아이디 중복검사를 하세요.")
      return;

    } else if (overLap === false) {
      alert("가입완료");
      props.signUpOpen(false);
      onCreate();
      inputs.id = ""
      inputs.pw = ""
    }
  }
  return (
    <div className="signUp-div">
      <span className="closeBtn" onClick={() => {
        props.signUpOpen(false);
        inputs.id = ""
        inputs.pw = ""
      }}>close</span>
      <span className="signUpTitle">회원가입</span>
      <form className="signUpForm">
        <div className="id-div">
          <input type="text" id="signUpId" name="id" placeholder="ID" onChange={onChange}></input>
          <button onClick={overLapCheck1}>중복검사</button>
        </div>
        <input type="password" id="signUpPw" name="pw" placeholder="PASSWORD" onChange={onChange}></input>
        <input type="password" id="confirmPw" name="confirmPw" value={conPw} placeholder="CONFIRM PASSWORD" onChange={confirmPw}></input>
        <div className="btn-div">
          <input type="button" id="signUpBtn" value="가입하기" onClick={signUpChecked}></input>
        </div>
      </form>
    </div>
  )
}