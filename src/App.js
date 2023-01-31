import React, { useRef, useState } from "react";
import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

export default function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ]);

  const nextId = useRef(4);
  // const usernameRef = useRef("");
  // const emailRef = useRef("");

  const onCreate = () => {
    const user = {
      id: nextId.current,
      // username: usernameRef.current.value,
      // email: emailRef.current.value,
      username,
      email,
    };
    // setUsers([...users, user]);
    setUsers(users.concat(user));

    setInputs({
      username: "",
      email: "",
    });

    // usernameRef.current.value = "";
    // emailRef.current.value = "";

    nextId.current += 1;
  };

  const onRemove = (id) => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  // console.log("Render");

  return (
    <>
      <h1>APP</h1>
      <InputSample />
      <hr />
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      {/* <input name="username" placeholder="USERNAME" ref={usernameRef} />
      <input name="email" placeholder="EMAIL" ref={emailRef} /> */}
      {/* <button onClick={onCreate}>CREATE</button> */}
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}
