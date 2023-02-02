[![React](https://skillicons.dev/icons?i=react)](https://skillicons.dev)
#  React

# 1. React Hook이란?
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

# 2. useState()
> 기본형 `const [state, setState] = useState(초기값);`

- `useState`는 컴포넌트에서 `state`값을 추가할때 사용된다.<br>
함수형 컴포넌트에서는 클래스형 컴포넌트처럼 `state`를 사용할 수 없어, Hook을 사용해 `state`와 같은 기능을 할 수 있도록 만듬
- 하나의 `useState`는 하나의 상태 값만 관리를 할 수 있어 만약에 컴포넌트에서 관리해야 할 상태가 여러 개라면 `useState`를 여러번 사용해야 한다
## 2.1 import
```javascript
import React, { useState } from 'react';
```
## 2.2 useState 선언

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
  
# 3. useRef()
> 기본형 `const refContainer = useRef(초기값);`

- `useRef`는 `.current` property로 전달된 인자(initialValue)로 초기화된 변경 가능한 `ref`객체를 반환합니다. 반환된 객체는 컴포넌트의 전 생애주기를 통해 유지된다. <br> 본질적으로 `useRef`는 `.current` property에 변경 가능한 값을 담고 있는 상자와 같다.
- `useRef`는 아래와 같은 상황에서 주로 사용 된다.
  - 특정 DOM 선택
  - 컴포넌트 안의 변수 생성
  - Rerendering 방지
 
## 3.1 import
```javascript
import React, { useRef } from 'react';
```
## 3.2 특정 DOM 선택
 > JavaScript 를 사용할 때는, 특정 DOM 을 선택해야 하는 상황에 `getElementById`, `querySelector`와 같은 DOM Selector 함수를 사용해서 DOM 을 선택한다.<br><br>
함수형 컴포넌트에서 사용할 때는 `useRef`를 사용하고 클래스형 컴포넌트에서는 콜백 함수를 사용하거나 React.createRef 라는 함수를 사용한다.

- `useRef` 를 사용하여 Ref객체를 만들고, 이 객체를 선택하고 싶은 DOM 에 `ref`값으로 설정한다. 그러면, Ref객체의 `.current`값은 DOM 을 가리키게 된다.
- RESET 버튼을 클릭했을 때 Name `input`에 포커스가 잡히도록 `useRef` 를 사용하여 기능을 구현하기
### 3.2.1 useRef 선언
```javascript
const nameInput = useRef();
```
### 3.2.2 `focus()` DOM API 호출
```javascript
nameInput.current.focus();
```
### 3.2.3  선택하고 싶은 DOM에 `ref` 값 설정
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
## 3.3 컴포넌트 안의 변수 생성
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

### 3.3.1 Id 값 지정
- 현재 3개의 Id 값이 있으므로 Id 값으로 `4` 지정
```javascript
const nextId = useRef(4);
```
### 3.3.2 Id 값 증가
- `onCreate()`가 실행될 때마다 `nextId`의 값이 1씩 증가
```javascript
const onCreate = () => {
...
  nextId.current += 1;
};
```
## 3.4 Re-rendering 방지
> 컴포넌트가 렌더링 된다는 것은 함수(컴포넌트)를 호출하여 실행되는 것을 의미. <br>
> 함수가 실행될 때마다 내부에 선언되어 있던 표현식(변수나 또 다른 함수 등)도 매번 다시 선언되어 사용. <br>
> 컴포넌트는 자신의 `state`가 변경되거나, 부모에게서 받는 `props`가 변경되었을 때마다 리렌더링 됨. <br>
>> 심지어 하위 컴포넌트에 최적화 설정을 해주지 않으면 부모에게서 받는 `props`가 변경되지 않았더라도 리렌더링. 
> `useRef` 로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링되지 않으므로 리렌더링 방지에 활용할 수 있다.

- **`onChange` 구현 부분을 `ref`값으로 대체해서 단점을 해결할 수 있다.** 
- `stat`e로 event의 value에 접근하지 않고 `refObject.current.value`를 사용하는 방법.

### 3.4.1 useRef 선언
```javascript
const usernameRef = useRef("");
const emailRef = useRef("");
```
### 3.4.2 선택하고 싶은 DOM에 `ref` 값 설정
```javascript
<input name="username" placeholder="USERNAME" ref={usernameRef} />
<input name="email" placeholder="EMAIL" ref={emailRef} />
```

### 3.4.3 `refObject.current.value` 사용 `user`에 값 저장
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
# 4. useEffect()
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
 
## 4.1 useEffect import
```javascript
import React, { useEffect } from "react";
```

## 4.2 useEffect 선언
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

# 5. useMemo() & useCallback() & React.memo()
## 5.1 Import
```javascript
import React, { useMemo, useCallback } from 'react';
```
## 5.2 useMemo()
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

## 5.3 useCallback()
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

## 5.4 React.memo()
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

# 6. useReducer()
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

## 6.1 Import
```javascript
import React, { useReducer } from "react";
```

## 6.2 dispatch
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

## 6.3 reducer 
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

# 7. Custom Hook
> Custom Hook의 등장
>1. 컴포넌트 사이에서 상태로직을 재사용하기 어렵다.
>  - Render Props와 HOC 같은 패턴은 코드의 파악이 어렵다
>  - 상태 관련 로직을 추상화 하기가 어렵다
>2. Class는 사람과 기계를 혼동시킨다.
>  - this가 동적으로 결정되기 때문에 클래스 내부에서 파악하기가 어렵다
>  - class는 코드의 최소화를 힘들게 만들고, 핫 리로딩을 깨지기 쉽고 신뢰할 수 없게 만든다.
>3. 복잡한 컴포넌트들은 이해하기가 어렵다
>  - 생명주기 class 메서드가 관련이 없는 로직들은 모아놓고, 관련이 있는 로직들은 여러개의 메서드에 나누어 놓는 경우가 자주 있었다.

## 7.1 Custom Hook이란?
  - `useState`와 `useEffect`들과 같이, <br>
     특정 상태관리나 라이프사이클 로직들을 추상화하여 묶어서 재사용이 가능하도록 제작이 가능한 함수
  - 즉, 특정 상태와 관련된 로직을 `useState`으로 정의하고, 이 state을 변경시킬 함수들을 객체로 담아 리턴하여 캡슐화한다
## 7.2 Custom Hook 사용 이유
  - 코드, 로직의 간결해지고 가독성이 좋아진다
  - 필요없는 반복을 줄이고 재사용성을 높인다
  - 수정사항이 있을 시 커스텀 훅에서만 수정하면 되기 때문에 유지보수에 용이하다
## 7.3 Custom Hook 작성시 주의사항
  - 리액트 내장훅과 마찬가지로 **커스텀 훅의 이름은 use로 시작**
  
# 8. Context API
## 8.1 Context란?
- 리액트에서 Props와 State는 부모 컴포넌트와 자식 컴포넌트 또는 한 컴포넌트 안에서 데이터를 다루기 위해 사용한다.
- Props와 State를 사용하게 되면 부모 컴포넌트에서 자식 컴포넌트 즉, 위에서 아래 한쪽으로 데이터가 흐르게 되는데,<br>
  만약 다른 컴포넌트에서 한쪽으로 흐르고 있는 데이터를 사용하고 싶은 경우 혹은 다른 컴포넌트에서 사용하고 있는 데이터를 현재의 데이터 흐름에 넣고 싶은 경우에<br>
  사용하고 싶은 데이터와 이 데이터를 사용할 컴포넌트의 공통 부모 컴포넌트에 State를 만들고 사용하고자 하는 데이터를 Props를 전달하면 된다.<br>
- 하지만 이처럼 컴포넌트 사이에 공유되는 데이터를 위해 매번 공통 부모 컴포넌트를 수정하고 하위 모든 컴포넌트에 데이터를 Props로 전달하는 것은 비효율적이다.
- 이와 같은 문제를 해결하기위해 리액트는 Flux라는 개념을 도입하면서 Context API를 제공했다
- **리액트 컴포넌트간에 어떠한 값을 공유할수 있게 해주는 기능** <br>


> **MVC(Model-View-Controller) Pattern** <br><br>
> 데이터를 다루는 로직(Controller), 데이터(Model), 사용자 인터페이스(View)를 나누어 어플리케이션을 구현하는 하나의 개발 모델 <br>
> ![images_huurray_post_e9c6c83c-f701-43b0-87b1-f1ca59736b56_simple_mvc](https://user-images.githubusercontent.com/103430498/215942237-63c4d967-8562-4f4a-af04-dda1ab646ffd.png) <br>
> Controller는 Model의 데이터를 조회하거나 업데이트하는 역할을 하며, Model의 변화는 View에 반영된다. 그리고 사용자가 뷰를 통해 데이터를 입력하면, 모델에 영향을 주면서 데이터를 관리하게 된다. <br>
> MVC 구조는 앱이 커지면서 굉장히 복잡해지고 View가 다양한 상호작용을 위해 여러개의 Model을 동시에 업데이트하는 상황이 나타면(많은 의존성을 가지게 되면) 예측불가능한 상황이 많이 나온다. <br>
> ![images_huurray_post_171ca365-368e-4c03-aaa2-97562eaf8e35_complex_mvc](https://user-images.githubusercontent.com/103430498/215942623-9cc2af67-ef49-4de3-9077-777285d76b85.png)


> **Flux Pattern** <br><br>
> MVC의 문제를 해결할 목적으로 고안한 애플리케이션 아키텍쳐 <br>
> 큰 특징은 단방향 데이터 흐름(Unidirectional data flow).
> 데이터 흐름은 Dispatcher => Store => View 로 흘러가며 뷰에서 입력되는 데이터가 발생하면 Action을 이용해 디스패처로 향함 <br>
> 데이터를 직접 수정할 수 없고 반드시 액션을 통해서만 수정이 일어나기 때문에 교통정리가 가능
> ![images_huurray_post_258b2187-866f-4cf8-b207-1ffec24bf55e_다운로드 (1)](https://user-images.githubusercontent.com/103430498/215942739-c5dbe88a-48c8-4202-84ba-6518eb7fa006.png) <br>
> ***Action*** <br>
> Action Creater Method, View에서의 사용자 상호작용에서 발생 <br>
> 첫 흐름을 발생시키는 요소이며 Dispatcher에게 해당 액션 메시지를 보내준다. <br>
> 타입(type)과 데이터(payload)를 가지고 있다. <br>
> ```javascript
> {
>   type: "EVENT_TYPE",
>   data: {
>     "name": "Huurray"
>   }
> }
> ```
> ***Dispatcher*** <br>
> Flux의 모든 데이터 흐름을 관리하는 중앙허브. <br>
> Store들이 등록해놓은 Action Type에 대한 맞춤 Callback이 있다. <br>
> Action이 넘어오면 Store들이 타입에 맞는 Store의 Callback을 실행하도록 해줌 <br>
> ***Store*** <br>
> Store는 데이터와 데이터를 가공하는 로직을 가지고 있다 <br>
> Dispatcher에 자신을 등록하고 Callback을 제공 <br>
> Action이 넘어오면 등록된 Callback을 활용해 타입에 맞는 로직을 실행하고 데이터를 업데이트 <br>
> Store는 변경된 데이터를 View에게 알려주고 자신의 컴포넌트 트리에 속해 있는 자식 노드 모두를 다시 랜더링하게함<br>
> ***View*** <br>
> Flux에서의 View는 MVC의 뷰와는 달리 화면을 보여주는것 외에도 Controller의 성격또한 가지고 있다. <br>
> 특히 최상위 View는 스토어에서 데이터를 가져와 이를 자식 View 로 내려보내주는 역할 <br>

## 8.2 Props로만 데이터를 전달하면 발생할 수 있는 문제
- 리액트 애플리케이션에서는 일반적으로 컴포넌트에게 데이터를 전달해주어야 할 때 Props를 통해 전달
- 깊숙히 위치한 컴포넌트에 데이터를 전달해야 하는 경우에는 여러 컴포넌트를 거쳐 연달아서 Props를 설정해주어야 하기 때문에 불편하고 실수할 가능성이 높음
```javascript
function App() {
  return <GrandParent value="Hello World!" />;
}

function GrandParent({ value }) {
  return <Parent value={value} />;
}

function Parent({ value }) {
  return <Child value={value} />;
}

function Child({ value }) {
  return <GrandChild value={value} />;
}

function GrandChild({ value }) {
  return <Message value={value} />;
}

function Message({ value }) {
  return <div>Received: {value}</div>;
}
```
- 이러한 코드를 "Props Drilling" 이라고 부른다. 컴포넌트를 한 두개정도 거쳐서 Props를 전달하는거라면 괜찮지만 이렇게 여러개를 거쳐서 전달하게 되면 불편함.
- `Message` 컴포넌트를 열어서, 이 `value` 값이 어디서 오는건지 파악하려고 한다면 그 상위 컴포넌트로 타고 또 타고 거슬러 올라가야 함
- 또, `value` 라는 네이밍을 `message` 로 변경을 하고 싶어진다면, 통일성을 맞추기 위해서 또 여러 컴포넌트들을 수정해야함


## 8.3 Context 사용법
- Context 는 리액트 패키지에서 `createContext` 라는 함수를 불러와서 만들 수 있다.
```javascript
import { createContext } from 'react';

const UserDispatch = createContext(null);
```
- `createContext`의 파라미터에는 Context 의 기본값을 설정할 수 있다.
- 여기서 설정하는 값은 Context 를 쓸 때 값을 따로 지정하지 않을 경우 사용되는 기본 값
- Context 를 만들면, Context 안에 Provider 라는 컴포넌트가 들어있는데 이 컴포넌트를 통하여 Context 의 값을 정할 수 있다.
- 이 컴포넌트를 사용할 때, value 라는 값을 설정
```javascript
<UserDispatch.Provider value={dispatch}>...</UserDispatch.Provider>
```
- Provider 에 의하여 감싸진 컴포넌트 중 어디서든지 Context 의 값을 다른 곳에서 바로 조회해서 사용 할 수 있다.

# 9. 불변성 관리
- 불변성이 프로그래밍에서 주목받는 이유는 변경 가능한 상태를 여러 곳에서 공유하게 됨으로써 발생하는 여러 가지 문제를 해결하기 위함.

## 9.1 불변성(Immutability)이란?
- 불변성이란 값이나 상태를 변경할 수 없는 것
> - 원시타입: Boolean, String, Number, null, undefined, Symbol
>   - 고정된 크기로 메모리에 저장, 실제 데이터가 변수에 할당.
> ```javascript
> let foo = 1;  // 메모리 영역a에 할당. 
> foo = 2;      // 다른 메모리 영역b 에 재할당. 즉, 메모리영역b는 a를 대체하는 것이 아니라 새로운 영역에 할당됨.
> ```

> - 참조타입: Object, Array
>   - 데이터 크기가 정해지지 않고 메모리에 저장, 데이터의 값이 heap에 저장되며 변수에 heap 메모리의 주소값이 할당.
>```javascript 
>const bar = {
>  name : "Son"
>};
>bar.name = "Kane";  // 내부 프로퍼티의 값을 변경했을 때 프로퍼티 `name`은 변경되지 않고 값이 변경된다
>```
> 즉, 불변성은 **메모리 영역에서 값이 변하지 않는다** 라는 의미 <br>
> 자바스크립트 객체는 가변한다. 리액트에서는 자바스크립트 객체가 가변하기 때문에 문제가 된다.

## 9.2 React에서 불변성을 지켜야 하는 이유
> - 리액트의 상태 업데이트 원리
>   - 리액트는 상태값을 업데이트 할 때 얕은 비교를 수행한다.
>   - 즉 배열이나 객체의 속성 하나하나를 비교하는게 아니라 이전 참조값과 현재 참조값만을 비교하여 상태 변화를 감지
  
1. 값이 변경됐는지(상태가 변화했는지) 알기 위해서 
2. 값을 수정하면, 이전 상태와 바뀐 상태값이 동일해져서 비교할 수 없어서

- 리액트에서는 상태가 변하면, 컴포넌트가 리렌더링된다.
- 리액트에서 리렌더링할 때 값 자체가 아니라 참조 값을 비교하므로 참조 값이 동일하면, 변경을 감지할 수 없다.
- 또한, 값을 수정하면 이전 상태와 바뀐 상태값이 동일해지기 때문에, 이전 상태와 현재 상태를 비교하여 렌더링할 수 없게 된다.

### 불변성을 지켰을 때 이점

1. 효율적인 상태업데이트 (얕은 비교 수행)
  - 얕은 비교란 객체의 프로퍼티를 하나하나 다 비교하지 않고, 객체의 참조 주소값만 변경되었는지 확인합. 
  - 얕은 비교는 계산 리소스를 줄여주기 때문에 리액트는 효율적으로 상태를 업데이트 할 수 있습니다.
2. 사이드 이펙트 방지 및 프로그래밍 구조의 단순성.
  - 원시타입은 불변성 특징을 가지고 있지만 참조타입인 객체나 배열의 경우 값을 변경할 때 원본데이터가 변경될 여지가 있다. <br>(불변성이 지켜지지 않을 수 있습니다). 
  - 이렇게 원본 데이터가 변경될 경우, 이 원본데이터를 참조하고 있는 다른 객체에서 예상치 못한 오류가 발생할 수 있다.
  - 또한 프로그래밍의 복잡도도 올라갑니다. 
  - 따라서 불변성을 지켜주면 사이드 이펙트를 방지하고 프로그래밍의 구조를 단순하게 유지할 수 있습니다.


## 9.3 불변성을 지키는 방법

### 9.3.1 Object.assign
```javascript
const bar = {
  name : "Son",
};

const baz = Object.assign({}, bar);
```

### 9.3.2 `spread operator`, `map`, `filter`, `slice`, `reduce` 등 새로운 배열을 반환하는 메소드들을 활용
```javascript
const bar = {
  name : "Son",
};

const baz = {
  ...bar,
  age: 30,
}
```
### 9.3.1 라이브러리
- 위의 방식들을 사용하면 얕은 복사가 된다. 따라서 객체 안의 객체가 있으면 그 안의 객체까지 복사해주어야하는데,
- 무분별하게 깊은 복사를 하면
  - 성능 저하
  - 리액트에서 변경되지 않은 객체도 변경되었다고 감지하여 모든 것을 리렌더링을 하는 문제가 발생할 수 있다.

#### 9.3.1.1 immer.js [<img src="https://img.shields.io/badge/Immer-00E7C3?style=flat&logo=Immer&logoColor=white" />](https://immerjs.github.io/immer/)
- 변경된 객체만 복사하여 성능을 향상시킬 수 있다.
##### 9.3.1.1.1 Install
```bash
> npm i immer
```
##### 9.3.1.1.2 Import
```javascript
import produce from 'immer';
```
##### 9.3.1.1.2 Usage
- `produce` 함수를 사용 할 때에는 
  - 첫번째 파라미터에는 수정하고 싶은 상태
  - 두번째 파라미터에는 어떻게 업데이트하고 싶을지 정의

```javascript
const state = {
  number: 1,
  dontChangeMe: 2
};

const nextState = produce(state, draft => {
  draft.number += 1;
});

console.log(nextState);
// { number: 2, dontChangeMe: 2 }
```
##### 9.3.1.1.3 Using immer


