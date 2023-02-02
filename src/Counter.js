// 함수형 컴포넌트
// import React, { useReducer } from "react";

// function reducer(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// }

// function Counter() {
//   const [number, dispatch] = useReducer(reducer, 0);

//   const onIncrease = () => {
//     dispatch({ type: "INCREMENT" });
//   };

//   const onDecrease = () => {
//     dispatch({ type: "DECREMENT" });
//   };

//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//     </div>
//   );
// }

// export default Counter;

// 클래스형 컴포넌트

import React, { Component } from "react";

class Counter extends Component {
  // handleIncrease() {
  //   console.log("Increase");
  // }
  // handleDecrease() {
  //   console.log("decrease");
  // }

  // constructor(props) {
  //   super(props);
  //   this.handleIncrease = this.handleIncrease.bind(this);
  //   this.handleDecrease = this.handleDecrease.bind(this);
  // }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     counter: 0,
  //   };
  // }
  // 화살표 문법을 사용하여 메서드를 작성할 수 있게 하는 class-properties 문법
  // 적용되어있으면 constructor을 작성하지 않고 아래와 같이 state를 설정
  state = {
    counter: 0,
    fixed: 1,
  };

  // handleIncrease = () => {
  //   this.setState({
  //     counter: this.state.counter + 1,
  //   });
  // };
  // handleDecrease = () => {
  //   this.setState({
  //     counter: this.state.counter + 1,
  //   });
  // };
  // 함수형 업데이트 setState를 여러번에 걸쳐서 해야하는 경우 유용
  // 함수형이 아닌 위의 코드는 setState를 두번 사용하면서 1씩 더할때 실제로 2가 더해지지 않음
  handleIncrease = () => {
    // 2씩 더하기
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  };
  handleDecrease = () => {
    this.setState((state) => ({
      counter: state.counter - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <p>고정된 값 : {this.state.fixed}</p>
      </div>
    );
  }
}

export default Counter;
