import React, { useState, useRef } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  const nameInput = useRef();

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
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
