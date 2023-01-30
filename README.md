# React Hooks
- React Hook은 Functional Component에 기능을 추가할 때 사용하는 함수
- Functional Component에서 상태값(state)을 사용할 수 있고 자식요소에 접근 할 수있음
> **state** <br>
컴포넌트 내 변경 가능한 데이터 저장소<br>
UI(엘리먼트)에 반영하기 위해 유지해야할 값 묶음<br>
리액트 컴포넌트에 저장한 데이터가 변화하면 UI가 자동으로 갱신됨<br><br>
리액트 개발의 핵심은 상태값을 효율적으로 관리하는 것, 그리고 상태값에 따라 화면이 불필요하게 업데이트되지 않도록 관리하는 것<br><br>
각 컴포넌트 안에서만 사용하는 값은 해당 컴포넌트 안에서 생성하고 갱신한다. 여러 컴포넌트에서 사용하는 값은 별도 공간에서 생성하고 갱신한다.<br><br>
상태값 관리는 getter/setter 함수로 하고, UI 갱신 문제 등이 있으니 직접 변경하는 것은 지양

## 1. useState()
> 기본형 `const [state, setState] = useState(초기값);`

- `useState`는 컴포넌트에서 `state`값을 추가할때 사용된다.<br>
함수형 컴포넌트에서는 클래스형 컴포넌트처럼 `state`를 사용할 수 없어, Hook을 사용해 `state`와 같은 기능을 할 수 있도록 만듬
- 하나의 `useState`는 하나의 상태 값만 관리를 할 수 있어 만약에 컴포넌트에서 관리해야 할 상태가 여러 개라면 `useState`를 여러번 사용해야 한다
### 1.1 import
```javascript
import React, { useState } from 'react';
```
### 1.2 useState 선언

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
  
## 2. useRef()
> 기본형 `const refContainer = useRef(초기값);`

- `useRef`는 `.current` property로 전달된 인자(initialValue)로 초기화된 변경 가능한 `ref`객체를 반환합니다. 반환된 객체는 컴포넌트의 전 생애주기를 통해 유지된다. <br> 본질적으로 `useRef`는 `.current` property에 변경 가능한 값을 담고 있는 상자와 같다.
- `useRef`는 아래와 같은 상황에서 주로 사용 된다.
  - 특정 DOM 선택
  - 컴포넌트 안의 변수 생성
  - Rerendering 방지
 
### 2.1 import
```javascript
import React, { useRef } from 'react';
```
### 2.2 특정 DOM 선택
 > JavaScript 를 사용할 때는, 특정 DOM 을 선택해야 하는 상황에 `getElementById`, `querySelector`와 같은 DOM Selector 함수를 사용해서 DOM 을 선택한다.<br><br>
함수형 컴포넌트에서 사용할 때는 `useRef`를 사용하고 클래스형 컴포넌트에서는 콜백 함수를 사용하거나 React.createRef 라는 함수를 사용한다.

- `useRef` 를 사용하여 Ref객체를 만들고, 이 객체를 선택하고 싶은 DOM 에 `ref`값으로 설정한다. 그러면, Ref객체의 `.current`값은 DOM 을 가리키게 된다.
- RESET 버튼을 클릭했을 때 Name `input`에 포커스가 잡히도록 `useRef` 를 사용하여 기능을 구현하기
#### 2.2.1 useRef 선언
```javascript
const nameInput = useRef();
```
#### 2.2.2 `focus()` DOM API 호출
```javascript
nameInput.current.focus();
```
#### 2.2.3  선택하고 싶은 DOM에 `ref` 값 설정
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
### 2.3 컴포넌트 안의 변수 생성
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

#### 2.3.1 Id 값 지정
- 현재 3개의 Id 값이 있으므로 Id 값으로 `4` 지정
```javascript
const nextId = useRef(4);
```
#### 2.3.2 Id 값 증가
- `onCreate()`가 실행될 때마다 `nextId`의 값이 1씩 증가
```javascript
const onCreate = () => {
...
  nextId.current += 1;
};
```
### 2.4 Re-rendering 방지
> 컴포넌트가 렌더링 된다는 것은 함수(컴포넌트)를 호출하여 실행되는 것을 의미. <br>
> 함수가 실행될 때마다 내부에 선언되어 있던 표현식(변수나 또 다른 함수 등)도 매번 다시 선언되어 사용. <br>
> 컴포넌트는 자신의 `state`가 변경되거나, 부모에게서 받는 `props`가 변경되었을 때마다 리렌더링 됨. <br>
>> 심지어 하위 컴포넌트에 최적화 설정을 해주지 않으면 부모에게서 받는 `props`가 변경되지 않았더라도 리렌더링. 
> `useRef` 로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링되지 않으므로 리렌더링 방지에 활용할 수 있다.

- **`onChange` 구현 부분을 `ref`값으로 대체해서 단점을 해결할 수 있다.** 
- `stat`e로 event의 value에 접근하지 않고 `refObject.current.value`를 사용하는 방법.

#### 2.4.1 useRef 선언
```javascript
const usernameRef = useRef("");
const emailRef = useRef("");
```
#### 2.4.2 선택하고 싶은 DOM에 `ref` 값 설정
```javascript
<input name="username" placeholder="USERNAME" ref={usernameRef} />
<input name="email" placeholder="EMAIL" ref={emailRef} />
```

#### 2.4.3 `refObject.current.value` 사용 `user`에 값 저장
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
## 3. useEffect()
> 기본형 `useEffect(함수, [, 의존값]);`
>> **effect** - 
> 함수의 형태로, 렌더링 이후 실행할 함수(리액트는 함수를 기억 했다가 DOM 업데이트 이후 불러냄) <br> 
> 함수에서 함수를 return 할 경우 그 함수가, 컴포넌트가 unmount 될 때 정리의 개념으로 한번 실행됨() - `cleanup` 함수 <br>
> (만약 컴포넌트가 mount 될 때 이벤트 리스너를 통해 이벤트를 추가하였다면 컴포넌트가 unmount 될 때 이벤트를 삭제해주어야한다. 그렇지 않으면 컴포넌트가 Re-rendering 될 때마다 새로운 이벤트 리스너가 핸들러에 바인딩됨.) <br> <br>
>> **의존값** - 
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
 
 ### 3.1 useRef import
```javascript
import React, { useEffect } from "react";
```

### 3.2 useRef 선언
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

>#16
