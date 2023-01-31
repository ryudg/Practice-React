import React from "react";

function CreateUser({ username, email, onChange, onCreate }) {
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
