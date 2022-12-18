import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../store";

function Home() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state);
  // Redux store state의 데이터를 가져오기
  console.log(todos);
  const dispatch = useDispatch();

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(addToDo(text));
    setText("");
  }
  return (
    <div>
      <h1>TO DO LIST</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="내용을 입력해주세요"
          value={text}
          onChange={onChange}
        />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
