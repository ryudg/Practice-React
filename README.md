# [![React](https://skillicons.dev/icons?i=react)](https://skillicons.dev) React Hooks
- React Hook은 함수형 컴포넌트에 기능을 추가할 때 사용하는 함수
- 함수형 컴포넌트에서 상태값(state)을 사용할 수 있고 자식요소에 접근 할 수있음

> **함수형 컴포넌트**<br>
>리액트에서 컴포넌트를 정의하는 방법중 하나로 javascript 함수를 이용하여 React element를 반환하는 컴포넌트를 말함 <br>
>컴포넌트를 정의하는 가장 간단한 방법은 Javascript 함수를 작성하는 것 <br>
>```javascript
>function Welcome(props) {
>  return <h1>Hello, {props.name}</h1>
>}
>```
>이 함수는 데이터를 가진 하나의 "props" 객체 인자를 받은 후 React 엘리먼트를 반환하므로 유효한 React 컴포넌트. <br>
>이러한 컴포넌트는 Javascript 함수이기 때문에 말 그대로 "함수 컴포넌트"라고 호칭.


> **state** <br>
컴포넌트 내 변경 가능한 데이터 저장소<br>
UI(엘리먼트)에 반영하기 위해 유지해야할 값 묶음<br>
리액트 컴포넌트에 저장한 데이터가 변화하면 UI가 자동으로 갱신됨<br><br>
리액트 개발의 핵심은 상태값을 효율적으로 관리하는 것, 그리고 상태값에 따라 화면이 불필요하게 업데이트되지 않도록 관리하는 것<br><br>
각 컴포넌트 안에서만 사용하는 값은 해당 컴포넌트 안에서 생성하고 갱신한다. 여러 컴포넌트에서 사용하는 값은 별도 공간에서 생성하고 갱신한다.<br><br>
상태값 관리는 getter/setter 함수로 하고, UI 갱신 문제 등이 있으니 직접 변경하는 것은 지양

- Hook은 리엑트 컴포넌트 내에서 사용되어 상태나 라이프사이클 로직을 추상화해 저장하고, 재사용 가능한 로직을 분리할 수 있도록 도와준다.
- 대표적으로 `useState`, `useEffect`등과 같은 내장 Hook 메서드들이 존재하며, 필요에 따라서 커스텀 Hook을 제작할 수 있습니다.

> **Hook의 원칙**
> - 최상위 레벨 에서만 Hook을 호출한다. (반복문이나 조건문 코드블랙 내에서 Hook을 호출하면 안됨)
> - 일반 javascript 함수 스코프 내에서 호출하지 않는다 (오직 React 함수 내에서 Hook을 호출한다.)

# 1. useState()
> 기본형 `const [state, setState] = useState(초기값);`

- `useState`는 컴포넌트에서 `state`값을 추가할때 사용된다.<br>
함수형 컴포넌트에서는 클래스형 컴포넌트처럼 `state`를 사용할 수 없어, Hook을 사용해 `state`와 같은 기능을 할 수 있도록 만듬
- 하나의 `useState`는 하나의 상태 값만 관리를 할 수 있어 만약에 컴포넌트에서 관리해야 할 상태가 여러 개라면 `useState`를 여러번 사용해야 한다
## 1.1 import
```javascript
import React, { useState } from 'react';
```
## 1.2 useState 선언

```javascript
const [inputs, setInputs] = useState({
  username: "",
  email: "",
});
```
- `const [inputs, setInputs]`
  - `useState`가 호출되면 배열을 반환하는데, 그 배열의 첫번째 원소는 상태값이고, 두번째 원소는 상태를 업데이트하는 함수이다. 이 함수에 파라미터를 넣어서 호출하게 되면 전달받은 파라미터로 값이 바뀌게 되고 컴포넌트는 정상적으로 리렌더링 된다.
- `inputs`
  - tate 값을 의미  
- `setInputs`
  - `inputs` 값을 업데이트하는 함수. 클래스 컴포넌트에서의 `this.setState`는 이전 `state`와 새로운 `state`를 합치지만 `setInputs`은 이전값을 덮어쓴다.
- `useState(...)`
  - `...` 값은 초기값을 의미. `useState`는 인자로 초기 `state` 설정값을 하나 받는다. 이 초기값은 첫 번째 렌더링 시에 딱 한 번 사용된다.
  
# 2. useRef()
> 기본형 `const refContainer = useRef(초기값);`

- `useRef`는 `.current` property로 전달된 인자(initialValue)로 초기화된 변경 가능한 `ref`객체를 반환합니다. 반환된 객체는 컴포넌트의 전 생애주기를 통해 유지된다. <br> 본질적으로 `useRef`는 `.current` property에 변경 가능한 값을 담고 있는 상자와 같다.
- `useRef`는 아래와 같은 상황에서 주로 사용 된다.
  - 특정 DOM 선택
  - 컴포넌트 안의 변수 생성
  - Rerendering 방지
 
## 2.1 import
```javascript
import React, { useRef } from 'react';
```
## 2.2 특정 DOM 선택
 > JavaScript 를 사용할 때는, 특정 DOM 을 선택해야 하는 상황에 `getElementById`, `querySelector`와 같은 DOM Selector 함수를 사용해서 DOM 을 선택한다.<br><br>
함수형 컴포넌트에서 사용할 때는 `useRef`를 사용하고 클래스형 컴포넌트에서는 콜백 함수를 사용하거나 React.createRef 라는 함수를 사용한다.

- `useRef` 를 사용하여 Ref객체를 만들고, 이 객체를 선택하고 싶은 DOM 에 `ref`값으로 설정한다. 그러면, Ref객체의 `.current`값은 DOM 을 가리키게 된다.
- RESET 버튼을 클릭했을 때 Name `input`에 포커스가 잡히도록 `useRef` 를 사용하여 기능을 구현하기
### 2.2.1 useRef 선언
```javascript
const nameInput = useRef();
```
### 2.2.2 `focus()` DOM API 호출
```javascript
nameInput.current.focus();
```
### 2.2.3  선택하고 싶은 DOM에 `ref` 값 설정
```javascript
<input
  name="name"
  placeholder="Name"
  onChange={onChange}
  value={name}
  ref={nameInput}
  autoComplete="off"
/>
```
## 2.3 컴포넌트 안의 변수 생성
>컴포넌트 안에서 조회 및 수정할 수 있는 변수를 관리할 수 있다.
>`useRef` 로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링되지 않는다.<br>
>리액트 컴포넌트에서의 상태는 상태를 바꾸는 함수를 호출하고 난 다음 렌더링 이후로 업데이트된 상태를 조회할 수 있지만, <br>
>`useRef` 로 관리하는 변수는 설정 후 바로 조회할 수 있다.
>변수를 사용하여 다음과 같은 값을 관리할 수 있다.
> - `setTimeout`, `setInterval`을 통해서 만들어진 `id`
> - 외부 라이브러리를 사용하여 생성된 인스턴스
> - `scroll`위치

- `useRef` 를 사용할 때 파라미터를 넣어주면, 이 값이 `.current`값의 기본값이 된다.
- 값을 수정할 때는 `.current`값을 수정하면 되고 조회할 때는 `.current`를 조회하면 된다.

### 2.3.1 Id 값 지정
- 현재 3개의 Id 값이 있으므로 Id 값으로 `4` 지정
```javascript
const nextId = useRef(4);
```
### 2.3.2 Id 값 증가
- `onCreate()`가 실행될 때마다 `nextId`의 값이 1씩 증가
```javascript
const onCreate = () => {
...
  nextId.current += 1;
};
```
## 2.4 Re-rendering 방지
> 컴포넌트가 렌더링 된다는 것은 함수(컴포넌트)를 호출하여 실행되는 것을 의미. <br>
> 함수가 실행될 때마다 내부에 선언되어 있던 표현식(변수나 또 다른 함수 등)도 매번 다시 선언되어 사용. <br>
> 컴포넌트는 자신의 `state`가 변경되거나, 부모에게서 받는 `props`가 변경되었을 때마다 리렌더링 됨. <br>
>> 심지어 하위 컴포넌트에 최적화 설정을 해주지 않으면 부모에게서 받는 `props`가 변경되지 않았더라도 리렌더링. 
> `useRef` 로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링되지 않으므로 리렌더링 방지에 활용할 수 있다.

- **`onChange` 구현 부분을 `ref`값으로 대체해서 단점을 해결할 수 있다.** 
- `stat`e로 event의 value에 접근하지 않고 `refObject.current.value`를 사용하는 방법.

### 2.4.1 useRef 선언
```javascript
const usernameRef = useRef("");
const emailRef = useRef("");
```
### 2.4.2 선택하고 싶은 DOM에 `ref` 값 설정
```javascript
<input name="username" placeholder="USERNAME" ref={usernameRef} />
<input name="email" placeholder="EMAIL" ref={emailRef} />
```

### 2.4.3 `refObject.current.value` 사용 `user`에 값 저장
```javascript
const onCreate = () => {
  const user = {
    id: nextId.current,
    username: usernameRef.current.value,
    email: emailRef.current.value,
  };
  setUsers(users.concat(user));   // users객체에 user 추가 
  usernameRef.current.value = ""; // input 값 초기화
  emailRef.current.value = "";    // input 값 초기화
  nextId.current += 1;
}
```
# 3. useEffect()
> 기본형 `useEffect(effect, [, deps]);`
>> **effect** - 
> 함수의 형태로, 렌더링 이후 실행할 함수(리액트는 함수를 기억 했다가 DOM 업데이트 이후 불러냄) <br> 
> 함수에서 함수를 return 할 경우 그 함수가, 컴포넌트가 unmount 될 때 정리의 개념으로 한번 실행됨() - `cleanup` 함수 <br>
> (만약 컴포넌트가 mount 될 때 이벤트 리스너를 통해 이벤트를 추가하였다면 컴포넌트가 unmount 될 때 이벤트를 삭제해주어야한다. 그렇지 않으면 컴포넌트가 Re-rendering 될 때마다 새로운 이벤트 리스너가 핸들러에 바인딩됨.) <br> <br>
>> **deps, 의존값** - 
> 배열의 형태로, 특정한 값이 변경될 때 effect함수를 실행 하고 싶을 경우 배열 안에 그 값을 넣어줌. <br>
> 빈 배열을 넣을 경우 컴포넌트가 mount 될 때에만 실행 <br>
> 배열을 생략할 경우 렌더링이 될 때 마다 실행

- 컴포넌트가 렌더링 될 때 특정 작업을 실행할 수 있도록 하는 Hook
- `useEffect`는 컴포넌트가 mount, unmount, update 됐을 때 특정 작업을 처리할 수 있다.<br>
 즉, 클래스형 컴포넌트에서 사용할 수 있던 **생명주기** 메소드를 함수형 컴포넌트에서도 사용할 수 있게 된 것.
 
 **Mount** - DOM이 생성되고 웹 브라우저상에 나타나는 것을 Mount 라고한다.<br>
> - props 로 받은 값을 컴포넌트의 로컬 상태로 설정<br>
> - 외부 API 요청 (REST API 등)<br>
> - 라이브러리 사용 (D3, Video.js 등...)<br>
> - setInterval 을 통한 반복작업 혹은 setTimeout 을 통한 작업 예약<br>

 **Unmount** - Mount 의 반대 과정, 즉 컴포넌트를 DOM에서 제거하는 것을 Unmount 라고 한다.<br>
> - setInterval, setTimeout 을 사용하여 등록한 작업들 clear 하기 (clearInterval, clearTimeout)<br>
> - 라이브러리 인스턴스 제거<br>
 
## 3.1 useEffect import
```javascript
import React, { useEffect } from "react";
```

## 3.2 useEffect 선언
```javascript
useEffect(() => {
  console.log("마운트 될 때만 실행")
}, []);

useEffect(() => {
  console.log("렌더링 될 때 마다 실행")
});

useEffect(() => {
  console.log("state 값이 변경 될 때 실행")
}, [state]);
```

- `useEffect` 안에서 사용하는 state나, props 가 있다면, useEffect 의 의존값에 넣어주어야 합
  - `useEffect` 에 등록한 함수가 실행 될 때 최신 props / state를 가르키지 않게 됨

# 4. useMemo() & useCallback() & React.memo()
## 4.1 Import
```javascript
import React, { useMemo, useCallback } from 'react';
```
## 4.2 useMemo()
> 기본형 `const memoizedValue = useMemo(() => computeExpensiveValue(deps), [ deps ]);`<br>
> 첫번째 파라미터에는 어떤 연산을 할지 함수를 정의<br>
> 두번째에는 useEffect와 마찬가지로 의존값들을 넣어주면 되는데, 이 배열 안에 넣은 내용이 변경되면 등록한 함수를 호출해서 값을 연산<br>
> 만약 빈 배열을 넣는다면 useEffect와 마찬가지로 마운트 될 때에만 값을 계산하고 그 이후론 계속 Memoization된 값을 꺼내와 사용

- `useMemo`는 성능 최적화를 위하여 연산된 값을 재사용하는 기능을 가진 함수
- `useMemo`에서 Memo는 Memoization을 뜻함
  - Memoization이란 기존에 수행한 연산의 결과값을 어딘가에 저장해두고 동일한 입력이 들어오면 재활용하는 프로그래밍 기법
  - Memoization을 절적히 적용하면 중복 연산을 피할 수 있기 때문에 메모리를 조금 더 쓰더라도 애플리케이션의 성능을 최적화할 수 있다.

- 활성 사용자 수 세기
```javascript
// App.js
...

function countActiveUsers(users) {
  console.log("사용자수");
  return users.filter((user) => user.active).length;
}
... 

const count = countActiveUsers(users);
```
- 사용자명을 눌러 활성화 상태로 만들면 사용자 수가 업데이트 된다.
  - 이때 성능 문제가 발생하는데 input 값을 변경할 때에도 `countActiveUsers `가 호출되는 것이다.
  - 활성 사용자 수를 세는것은 `users` 에 변화가 있을때만 세야되는건데, input 값이 바뀔 때에도 컴포넌트가 리렌더링 되므로 이렇게 불필요할때에도 호출하여서 자원이 낭비된다.
  
- useMemo()
```javascript
// App.js
...

const count = useMemo(() => countActiveUsers(users), [users]);
```

## 4.2 useCallback()
> 기본형 `const memoizedCallback = useCallback(() =>, [ deps ]);`

- `useCallback`은 `useMemo`와 비슷한 Hook. `useMemo`는 특정 **결괏값**을 재사용할 때 사용하는 반면,  `useCallback`은 **특정 함수**를 새로 만들지 않고 재사용하고 싶을 때 사용하는 함수. <br>
- `useCallback`은 첫 번째 인자로 넘어온 함수를, 두 번째 인자로 넘어온 배열 형태의 함수 실행 조건의 값이 변경될 때까지 저장해놓고 재사용할 수 있게 해줌.
> 컴포넌트 안에 함수가 선언되어있을 때 이 함수는 해당 컴포넌트가 렌더링 될 때마다 새로운 함수가 생성되는데, `useCallback`을 사용하면 해당 컴포넌트가 렌더링 되더라도 그 함수가 의존하는 값(deps)들이 바뀌지 않는 한 기존 함수를 재사용할 수 있다.

- `onChange`,`onCreate`, `onRemove`, `onToggle`은 컴포넌트가 리렌더링 될 때 마다 새로 만듬
  - props 가 바뀌지 않았으면 Virtual DOM 에 새로 렌더링하는 것 조차 하지 않고 컴포넌트의 결과물을 재사용 하는 최적화 작업을 위해서는 함수를 재사용하는 것이 필수

- useCallback() 예시
```javascript
// App.js

...

// useCallback 사용 전
const onToggle = (id) => {
  setUsers(
    users.map((user) =>
      user.id === id ? { ...user, active: !user.active } : user
    )
  );
};
// useCallback 사용 후
const onToggle = useCallback(
  (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  },
  [users]
);
```
- 주의⚠
  - 함수 안에서 사용하는 상태 혹은 props 가 있다면 꼭, deps 배열안에 포함시켜야 된다.
  - deps 배열 안에 함수에서 사용하는 값을 넣지 않게 된다면, 함수 내에서 해당 값들을 참조할때 가장 최신 값을 참조 할 것이라고 보장 할 수 없다. 
  - props 로 받아온 함수가 있다면, 이 또한 deps 에 넣어야 한다.

- `useCallback` 은 `useMemo` 를 기반으로 만들어졌기 때문에 아래와 같이 표현할 수도 있다.
```javascript
const onToggle = useMemo(
  () => () => {
    /* ... */
  },
  [users]
);
```

## 4.3 React.memo()
> 기본형
```javascript
const MyComponent = React.memo(function MyComponent(props) {
  /* props를 사용하여 렌더링 */
});

...

export default React.memo(MyComponent);
```

> `React.memo`는 Memoization(메모이제이션) 기법으로 동작하며, 고차 컴포넌트(Higher Order Component, HOC)이다.<br>
> 컴포넌트가 props로 동일한 결과를 렌더링하면, `React.memo`를 호출하고 결과를 메모이징(Memoizaing) 하도록 래핑하여 경우에 따라 성능 향상을 할 수 있다.<br>
> 즉, React는 컴포넌트를 재렌더링하지 않고 마지막으로 렌더링된 결과를 재사용한다.<br>
> `React.memo`는 props 변화에만 영향을 준다.<br>
> 즉, 함수 컴포넌트 안에서 구현한 state나 context가 변할 때는 재렌더링된다.<br>
> props가 갖는 복잡한 객체에 대하여 얕은 비교만을 수행하는 것이 기본 동작이다.<br>
> 다른 비교 동작을 원한다면, 두번째 인자로 별도의 비교 함수를 제공하면 된다.<br>

- props가 이전과 동일한 값이면 재렌더링하지 않고, 다른 값이면 재렌더링하여 컴포넌트를 다시 만들어 반환한다.
- `React.memo`에 쓰인 컴포넌트 안에서 구현한 state가 변경되면 컴포넌트는 재렌더링이 된다.

- 렌더링 최적화 하지 않을 컴포넌트에 `React.memo` 를 사용하는것은, 불필요한 props 비교만 하는 것이기 때문에 실제로 렌더링을 방지할수있는 상황이 있는 경우에만 사용

- `React.memo`에서 두번째 파라미터에 `propsAreEqual` 이라는 함수를 사용하여 특정 값들만 비교를 하는 것도 가능
```javascript
export default React.memo(
  UserList,
  (prevProps, nextProps) => prevProps.users === nextProps.users
);
```
- **`useCallback`, `useMemo`, `React.memo` 는 컴포넌트의 성능을 실제로 개선할수있는 상황에서만 사용!!!**

# 5. useReducer()
> 기본형 `const [state, dispatch] = useReducer(reducer, initialState, init);` <br>
> **state** - 컴포넌트에서 사용할 상태 <br>
> **dispatch** 함수 - 첫번째 인자인 reducer 함수를 실행시킨다. 컴포넌트 내에서 state의 업데이트를 일으키키 위해 사용하는 함수 <br>
> **reducer** 함수 - 컴포넌트 외부에서 state를 업데이트 하는 함수. 현재state, action 객체를 인자로 받아, 기존의 state를 대체하여 새로운 state를 반환하는 함수 <br>
> **initialState** - 초기 state <br>
> **init** - 초기 함수 (초기 state를 조금 지연해서 생성하기 위해 사용)

- `useReducer`는 state(상태)를 관리하고 업데이트하는 Hook인 `useState`를 대체할 수 있는 Hook
- 한 컴포넌트 내에서 state를 업데이트하는 로직 부분을 그 컴포넌트로부터 분리시키는 것을 가능
- `seReducer`는 state 업데이트 로직을 분리하여 컴포넌트의 외부에 작성하는 것을 가능하게 함으로써, 코드의 최적화
  - state 업데이트 로직을 또다른 파일에 작성해서 (분리), 분리된 파일을 불러와서 사용하는 것도 가능

> **useState** vs **useReducer**
>- useState
>   - 관리해야 할 state가 1개일 경우
>   - 그 state가 단순한 숫자, 문자열 또는 Boolean 값일 경우
> ```javascript
>  const [value, setValue] = useState(true);
> ```
>- useReducer
>   - 관리해야 할 State가 1개 이상, 복수일 경우
>   - 혹은 현재는 단일 state 값만 관리하지만, 추후 유동적일 가능성이 있는 경우
>   - 스케일이 큰 프로젝트의 경우
>   - state의 구조가 복잡해질 것으로 보이는 경우
> ```javascript
> setUsers(users => users.concat(user));
> setInputs({
>   username: '',
>   email: ''
> });
> ```

## 5.1 Import
```javascript
import React, { useReducer } from "react";
```

## 5.2 dispatch
- `reducer` 함수를 실행 시킨다.
- `action` 객체를 인자로 받으며 `action` 객체는 어떤 행동인지를 나타내는 type 속성과 해당 행동과 관련된 데이터(payload)를 담고 있다. (action 객체의 형태는 자유)
- `action`을 이용하여 컴포넌트 내에서 state의 업데이트를 일으킨다. (업데이트를 위한 정보를 가지고 있음)
    - action type만 정의하여 사용 
    ```javascript
    <button onClick={() => dispatch({ type: "INCREMENT" })}>증가</button>
    ```
    - action type과, 데이터를 정의하여 사용 
    ```javascript
    <button onClick={() => dispatch({ type: "INCREMENT", payload: 1, id : 0, text : "useReducer" })}>증가</button>
    ```

## 5.3 reducer 
- dispatch 함수에 의해 실행되며, 컴포넌트 외부에서 state를 업데이트 하는 로직을 담당 한다.
- 함수의 인자로는 state와 `action`을 받게 된다.
- state와 action을 활용하여 새로운 state를 반환 한다.
  - action type만 정의하여 사용
  ```javascript
  function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      throw new Error("unsupported action type: ", action.type);
    }
  }
  ```
  - action type과, 데이터를 정의하여 사용
  ```javascript
  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + action.payload };
      case "DECREMENT":
        return { count: state.count - action.payload };
      default:
        throw new Error("unsupported action type: ", action.type);
    }
  }
  ```

# 6. Custom Hook
> Custom Hook의 등장
>1. 컴포넌트 사이에서 상태로직을 재사용하기 어렵다.
>  - Render Props와 HOC 같은 패턴은 코드의 파악이 어렵다
>  - 상태 관련 로직을 추상화 하기가 어렵다
>2. Class는 사람과 기계를 혼동시킨다.
>  - this가 동적으로 결정되기 때문에 클래스 내부에서 파악하기가 어렵다
>  - class는 코드의 최소화를 힘들게 만들고, 핫 리로딩을 깨지기 쉽고 신뢰할 수 없게 만든다.
>3. 복잡한 컴포넌트들은 이해하기가 어렵다
>  - 생명주기 class 메서드가 관련이 없는 로직들은 모아놓고, 관련이 있는 로직들은 여러개의 메서드에 나누어 놓는 경우가 자주 있었다.

- Custom Hook이란?
  - `useState`와 `useEffect`들과 같이, <br>
     특정 상태관리나 라이프사이클 로직들을 추상화하여 묶어서 재사용이 가능하도록 제작이 가능한 함수
  - 즉, 특정 상태와 관련된 로직을 `useState`으로 정의하고, 이 state을 변경시킬 함수들을 객체로 담아 리턴하여 캡슐화한다
- Custom Hook 사용 이유
  - 코드, 로직의 간결해지고 가독성이 좋아진다
  - 필요없는 반복을 줄이고 재사용성을 높인다
  - 수정사항이 있을 시 커스텀 훅에서만 수정하면 되기 때문에 유지보수에 용이하다
- Custom Hook 작성
  - 리액트 내장훅과 마찬가지로 **커스텀 훅의 이름은 use로 시작**




