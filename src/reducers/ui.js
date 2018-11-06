import * as types from '../actions/ActionTypes';
// 불러오고
// 초기상태를 설정

const initialState = {
    color: [255, 255, 255]
};

export default function ui(state = initialState, action){
  // SET_COLOR 면 새로운 객체 만들어서 리턴
  if(action.type=== types.SET_COLOR){
    return {
        color:action.color
    };
  }else{
    return state;
  }
}

// 리듀서가 두개 이상이면 리듀서를 합쳐준다.
//그리고 리듀서 함수를 만들기
