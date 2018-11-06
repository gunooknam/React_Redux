// 합치기 위한 인덱스 파일 => 컴바인을 한다.
import { combineReducers } from 'redux';
import counter from './counter';
import ui from './ui';
// 이렇게 만들고 우리가 합칠 리듀서를 넣는다.
const reducers = combineReducers({
    counter, ui
});

export default reducers;
// 리듀서로 스토어를 만들고 컴포넌트에 연결
