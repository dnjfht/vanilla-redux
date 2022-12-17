import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// reducer나 modifier는 처음으로 data를 바꿔줌
// return하는 것은 application에 있는 데이터
// application의 data를 수정하고 싶으면 countModifier을 사용 ( 유일하게 data를 수정 가능)
// redux는 data가 기본적으로 한 곳에만 있음
// 현재 상태를 얻고 싶을 것 => state를 argument로 가지게 됨

// action은 redux에서 function을 부를 때 쓰는 두 번째 parameter, 혹은 argument
const countModifier = (count = 0, action) => {
  console.log(count, action);
  return count;
};
// createStore라는 함수가 reducer를 주기를 요구함
const countStore = createStore(countModifier);

// store 안에는 dispatch, subscribe, getState, replaceReducer 4 개의 함수가 있음
// 안에 있는 getStsate() 함수를 쓰면 현재 상태를 get하게 되는 것
console.log(countStore.getState());
// store를 만들면 countModifier를 initial state로 불러옴
