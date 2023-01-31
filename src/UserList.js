import React from "react";

function User({ user, onRemove, onToggle }) {
  // useEffect(() => {
  //   console.log("나타남");
  //   console.log(user);
  //   return () => {
  //     console.log("사라짐");
  //     console.log(user);
  //   };
  // }, [user]);

  return (
    <div>
      <b
        style={{ cursor: "pointer", color: user.active ? "green" : "black" }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>{" "}
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>DELETE</button>
    </div>
  );
}

// onClick={() => onRemove(user.id)} vs onClick={onRemove(user.id)}
// onClick={someFunction()} 을 해버리면 해당 컴포넌트가 렌더링이 되는것과 동시에 someFunction함수를 실행
// onClick={someFunction} 으로 지정해서 () 를 제외하는 방법으로 함수가 즉시실행 되지 않게 하고, 클릭했을때 실행이 되도록

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user, index) => (
        <User user={user} key={index} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
}

export default UserList;
