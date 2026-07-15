import { useState } from 'react';

// function = 함수 / Counter = 함수 이름
function Counter() {
    const [count, setCount] = useState(0);
    // count = 값 / setCount = 값을 바꾸는 함수
    // useState = 초기값

    const handleClick = () => {
        // 변수 handelClick 에 화살표 함수를 적용, 저장
        setCount((currentCount) => {
            // setCount = 값 또는 함수가 들어가는 공간.
            // 화살표 함수를 적용, 매개변수는 currentCount
            // currentCount 는 useState  의 count 값을 받는다.
            if (currentCount >= 7) return 7;
            // if = 조건문

            return currentCount + 1;
            // return = 함수가 실행된 결과를 밖으로 돌려주는 문법 / 종료
        });
    };

    return <div onClick={handleClick}>{count}</div>;
}

export default Counter;
