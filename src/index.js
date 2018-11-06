import React from 'react';
import ReactDOM from 'react-dom';

import App from './component/App';

import { createStore } from 'redux';
import reducers from './reducers';

import { Provider } from 'react-redux';

const store = createStore(reducers); //이렇게 하면 스토어가 만들어진 것
                                     // store가 하는 일
// 앞으로 컴포넌트에서 리덕스 스토어 안에 데이터 사용하고 필요하면 변화를
// 주도록 하는데 그렇게 하려면
// app 컴포넌트의 스토어를 프롭스로 전달해서 하위 컴포넌트 안에서
// getstate를 한다던지 디스패치를 한다던지 변화를 주면 되는데
// 이러면 구조가 복잡해짐
// 리액트에서 리덕스를 편하게 사용하는 방법있음
// react x redux view 레이어 바인딩 쓴다.
// 프로바이더의 프롭스는 스토어로 설정

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
