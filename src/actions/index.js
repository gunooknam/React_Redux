// 방법 1
// import { INCREMENT, DECREMENT, SET_DIFF } from './ActionTypes';

// 방법2 이렇게 입력하면 각 상수에 접근 가능
import * as types from './ActionTypes';

//=> types.SET_DIFF 이렇게 사용가능

// 액션 생성자 다른곳에서 불러 올 수 있도록 함
export function increment() {
  return {
    type: types.INCREMENT
  };
}

export function decrement() {
  return {
    type: types.DECREMENT
  };
}

export function setColor(color){
  return {
    type: types.SET_COLOR,
    color
    // color:color 와 동일
  };
}
