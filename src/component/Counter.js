// 이건 스마트컴포넌트다.
import React, { Component } from 'react';
import Value from './Value';
import Control from './Control';
import {connect } from 'react-redux';

import * as actions from '../actions';

class Counter extends Component {
    constructor(props) {
        super(props);
        //여기서 this를 사용하니까 이 constructor 에서 아래를 바인딩 한다.
        this.setRandomColor = this.setRandomColor.bind(this);
    }
    setRandomColor(){
      const color = [
        Math.floor((Math.random()*55)+200),
        Math.floor((Math.random()*55)+200),
        Math.floor((Math.random()*55)+200)
      ];
      this.props.handleSetColor(color);
    }
    render() {
       const color = this.props.color;
       const style = {
         // templete 리터럴 사용
         background: `rgb(${color[0]} , ${color[1]}, ${color[2]})`
       };
      return(
            <div style={style}>
              <Value number={this.props.number}/>
              <Control
                onPlus={this.props.handleIncrement}
                onSubtract={this.props.handleDecrement}
                onRandomizeColor={this.setRandomColor}
                />
            </div>
      );
    }
}

const mapStateToProps = (state) => {
   return {
     number : state.counter.number,
     color  : state.ui.color
   };
}
const mapDispatchToProps = (dispatch) => {
    //return bindActionCreators(actions, dispatch);
    return {
      handleIncrement: () => { dispatch(actions.increment())},
      handleDecrement: () => { dispatch(actions.decrement())},
      handleSetColor: (color) => {dispatch(actions.setColor(color))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// 커넥트가 반환하는건 컴포넌트가 리덕스에 연결하는 또다른 함수를 반환한다.
// 한 함수를 반환, 파라미터에 Counter를 넣어준다.
