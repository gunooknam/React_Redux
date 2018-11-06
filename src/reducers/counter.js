import * as types from '../actions/ActionTypes';
// 초기 상태 작성 // 카운터에는 숫자 하나 필요
const initialState = {
    number:0,
    dummy: 'dumbdumb',
    dumbObject: {
      d:0,
      u:1,
      m:2,
      b:3
    }
};
// 이전 상태값, 액션 // 기본 인수 저 스테이트가 undefined
// 면 재를 가져다 쓴다.
export default function counter(state=initialState, action){
  /*
  if(typeof state === 'undefined'){
      return initialState;
  }
  */
  /* ... */
  // 타입에 따라서 어떤일을 할지 정의 추가적인 정보를 이용
  switch(action.type){
    case types.INCREMENT:
     //  return {number: state.number + 1}; //새로운 객체 만듬
      return {
             ...state,
             number: state.number + 1,
             dumbObject: {...state.dumbObject, u:0}
           };
    case types.DECREMENT:
      return {
            ...state,
            number: state.number -1
      }
    default:
        return state; // 기본 상태 그대로 전달
        // 여기서 변화가 없으니 다른 리듀스에서 액션을 처리
        // 다른 리듀서를 만들자
   }
}
