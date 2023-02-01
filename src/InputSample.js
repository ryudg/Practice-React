import React, { useState, useRef } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  const nameInput = useRef();

  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const onRest = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="Name"
        onChange={onChange}
        value={name}
        ref={nameInput}
        autoComplete="off"
      />
      <input
        name="nickname"
        placeholder="NickName"
        onChange={onChange}
        value={nickname}
        autoComplete="off"
      />
      <button onClick={onRest}>RESET</button>
      <div>
        <b>result : </b>
        {name} ( {nickname} )
      </div>
    </div>
  );
}

export default InputSample;
