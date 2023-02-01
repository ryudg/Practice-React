// ---------- useState

// import React, { useCallback, useMemo, useRef, useState } from "react";
// import InputSample from "./InputSample";
// import UserList from "./UserList";
// import CreateUser from "./CreateUser";
// import Counter from "./Counter";

// function countActiveUsers(users) {
//   console.log("사용자 수 세는 중...");
//   return users.filter((user) => user.active).length;
// }

// function App() {
//   const [inputs, setInputs] = useState({
//     username: "",
//     email: "",
//   });

//   const { username, email } = inputs;
//   const onChange = useCallback((e) => {
//     const { name, value } = e.target;
//     setInputs({
//       ...inputs,
//       [name]: value,
//     });
//   }, []);

//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       username: "Son",
//       email: "Son@gmail.com",
//       active: true,
//     },
//     {
//       id: 2,
//       username: "Kane",
//       email: "Kane@example.com",
//       active: false,
//     },
//     {
//       id: 3,
//       username: "Hol",
//       email: "Hol@example.com",
//       active: false,
//     },
//   ]);

//   const nextId = useRef(4);
//   // const usernameRef = useRef("");
//   // const emailRef = useRef("");

//   const onCreate = useCallback(() => {
//     const user = {
//       id: nextId.current,
//       // username: usernameRef.current.value,
//       // email: emailRef.current.value,
//       username,
//       email,
//     };
//     // setUsers([...users, user]);
//     setUsers((users) => users.concat(user));

//     setInputs({
//       username: "",
//       email: "",
//     });

//     // usernameRef.current.value = "";
//     // emailRef.current.value = "";

//     nextId.current += 1;
//   }, [username, email]);

//   const onRemove = useCallback((id) => {
//     // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
//     // = user.id 가 id 인 것을 제거함
//     setUsers(users.filter((user) => user.id !== id));
//   }, []);

//   const onToggle = useCallback((id) => {
//     setUsers(
//       users.map((user) =>
//         user.id === id ? { ...user, active: !user.active } : user
//       )
//     );
//   }, []);

//   console.log("Render");
//   const count = useMemo(() => countActiveUsers(users), [users]);

//   return (
//     <>
//       <h1>APP</h1>
//       <Counter />
//       <hr />
//       <br />
//       <InputSample />
//       <hr />
//       <br />
//       <CreateUser
//         username={username}
//         email={email}
//         onChange={onChange}
//         onCreate={onCreate}
//       />
//       {/* <input name="username" placeholder="USERNAME" ref={usernameRef} />
//       <input name="email" placeholder="EMAIL" ref={emailRef} /> */}
//       {/* <button onClick={onCreate}>CREATE</button> */}
//       <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
//       <div>활성 사용자 수 : {count}</div>
//     </>
//   );
// }
// export default App;

// ---------- useReducer
// import React, { useRef, useMemo, useCallback, useReducer } from "react";
// import UserList from "./UserList";
// import CreateUser from "./CreateUser";

// function countActiveUsers(users) {
//   console.log("활성 사용자 수를 세는중...");
//   return users.filter((user) => user.active).length;
// }

// const initialState = {
//   inputs: {
//     username: "",
//     email: "",
//   },
//   users: [
//     {
//       id: 1,
//       username: "velopert",
//       email: "public.velopert@gmail.com",
//       active: true,
//     },
//     {
//       id: 2,
//       username: "tester",
//       email: "tester@example.com",
//       active: false,
//     },
//     {
//       id: 3,
//       username: "liz",
//       email: "liz@example.com",
//       active: false,
//     },
//   ],
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "CHANGE_INPUT":
//       return {
//         ...state,
//         inputs: {
//           ...state.inputs,
//           [action.name]: action.value,
//         },
//       };
//     case "CREATE_USER":
//       return {
//         inputs: initialState.inputs,
//         users: state.users.concat(action.user),
//       };
//     case "TOGGLE_USER":
//       return {
//         ...state,
//         users: state.users.map((user) =>
//           user.id === action.id ? { ...user, active: !user.active } : user
//         ),
//       };
//     case "REMOVE_USER":
//       return {
//         ...state,
//         users: state.users.filter((user) => user.id !== action.id),
//       };
//     default:
//       return state;
//   }
// }

// function App() {
//   const [state, dispath] = useReducer(reducer, initialState);
//   const nextId = useRef(4);

//   const { users } = state;
//   const { username, email } = state.inputs;

//   const onChange = useCallback((e) => {
//     const { name, value } = e.target;
//     dispath({
//       type: "CHANGE_INPUT",
//       name,
//       value,
//     });
//   }, []);

//   const onCreate = useCallback(() => {
//     dispath({
//       type: "CREATE_USER",
//       user: {
//         id: nextId.current,
//         username,
//         email,
//       },
//     });
//     nextId.current += 1;
//   }, [username, email]);

//   const onToggle = useCallback((id) => {
//     dispath({
//       type: "TOGGLE_USER",
//       id,
//     });
//   }, []);

//   const onRemove = useCallback((id) => {
//     dispath({
//       type: "REMOVE_USER",
//       id,
//     });
//   }, []);

//   const count = useMemo(() => countActiveUsers(users), [users]);

//   return (
//     <>
//       <CreateUser
//         username={username}
//         email={email}
//         onChange={onChange}
//         onCreate={onCreate}
//       />
//       <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
//       <div>활성사용자 수 : {count}</div>
//     </>
//   );
// }

// export default App;

// ----- useCustom hook

import React, { useRef, useMemo, useCallback, useReducer } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import useInputs from "./hooks/useInputs";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중...");
  return users.filter((user) => user.active).length;
}

const initialState = {
  inputs: {
    username: "",
    email: "",
  },
  users: [
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
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      return state;
  }
}

function App() {
  const [{ username, email }, onChange, onReset] = useInputs({
    username: "",
    email: "",
  });

  const [state, dispath] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  const { users } = state;

  const onCreate = useCallback(() => {
    dispath({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    onReset();
    nextId.current += 1;
  }, [username, email, onReset]);

  const onToggle = useCallback((id) => {
    dispath({
      type: "TOGGLE_USER",
      id,
    });
  }, []);

  const onRemove = useCallback((id) => {
    dispath({
      type: "REMOVE_USER",
      id,
    });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;
