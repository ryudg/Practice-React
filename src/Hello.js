// 함수형 컴포넌트
// import React from "react";

// function Hello({ color, name, isSpecial }) {
//   return (
//     <div style={{ color }}>
//       {isSpecial && <b>*</b>}
//       안녕하세요 {name}
//     </div>
//   );
// }

// Hello.defaultProps = {
//   name: "이름없음",
// };

// export default Hello;

// 클래스형 컴포넌트
import React, { Component } from "react";

class Hello extends Component {
  static defaultProps = {
    name: "이름없음",
  };
  render() {
    const { color, name, isSpecial } = this.props;
    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
      </div>
    );
  }
}

// 클래스 내부 static 키워드로 선언 가능
// Hello.defaultProps = {
//   name: "이름없음",
// };

export default Hello;
