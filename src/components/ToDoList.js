import React, { useState, useEffect, useRef } from 'react';
import '../css/ToDoList.css';

export default function ToDoList() {

  let [toDos, setTodo] = useState(["hook", "useEffect", "useRef"]);
  let [newToDo, setNewTodo] = useState();

  const getValue = (e) => {
    setNewTodo(e.target.value)
  }
  const listAdd = (e) => {
    e.preventDefault()
    if (!newToDo) {
      alert("데이터를 입력하세요.")
      return;
    }
    setTodo([...toDos, newToDo]);
  }
  const toDoList = toDos.map(todo => <li>{todo}</li>)

  let [useCount, setUseCount] = useState(1);
  useEffect(() => {
    setUseCount(useCount + 1);
    document.querySelector(".useEffectDiv").textContent = `useEffect() ${useCount}번 실행`;
  }, [toDos])

  let _useRef = useRef();

  const useRefController = () => {
    _useRef.current.style = ("width : 300px; height : 100px; background-color : green; color : white;");
  }
  const useRefController1 = () => {
    _useRef.current.style = ("width : 300px; height : 100px; background-color : blue; color : white;");
  }

  let reDesign = useRef();
  let changeCheck;
  const designChange = () => {
    if(!changeCheck){
      changeCheck = true;
      reDesign.current.style = ("display : flex; justify-content : center; flex-direction : row; algin-item : center");
  }else{
    reDesign.current.style = ("display : flex; justify-content : center; flex-direction : column; algin-item : center");
    changeCheck = false;
  }
};

  return (
    <div className="toDoList" ref={reDesign}>
      <button onClick={designChange} style={{ position: "relative", cursor : "pointer" }}>useRef 디자인 변경</button>
      <div style={{ textAlign: "center" }}>
        <h2>TODO LIST</h2>
        <div className="form-div">
          <form action="">
            <input id="toDo" type="text" onChange={getValue} />
            <button onClick={listAdd}>할일 추가</button>
            <ul>
              <li>
                {toDoList}
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className="useEffectDiv" ref={_useRef} style={{ width: "300px", height: "100px", backgroundColor: "lightblue" }}>

      </div>
      <div style={{ width: "400px", margin: "20px", display: "flex", justifyContent: "space-around" }}>
        <button style={{ cursor: "pointer" }} onClick={useRefController}>useRef 컨트롤</button>
        <button style={{ cursor: "pointer" }} onClick={useRefController1}>useRef 컨트롤</button>
      </div>
    </div>
  )
}
