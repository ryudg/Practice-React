import React, { useRef, useContext } from "react";
import useInputs from "./hooks/useInputs";
import { UserDispatch } from "./App";

function CreateUser() {
  const [{ username, email }, onChange, onRset] = useInputs({
    username: "",
    email: "",
  });

  const nextId = useRef(4);
  const dispatch = useContext(UserDispatch);

  const onCreate = () => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    onRset();
    nextId.current += 1;
  };

  return (
    <div>
      <input
        name="username"
        placeholder="USERNAME"
        onChange={onChange}
        value={username}
        autoComplete="off"
      />
      <input
        name="email"
        placeholder="EMAIL"
        onChange={onChange}
        value={email}
        autoComplete="off"
      />
      <button onClick={onCreate}>CREATE</button>
    </div>
  );
}

export default React.memo(CreateUser);
