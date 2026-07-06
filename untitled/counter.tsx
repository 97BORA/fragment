import { CSSProperties, useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount((currentCount) => {
            if (currentCount >= 7) return currentCount;

            return currentCount + 1;
        });
    };

    const handleView = () => {
        setCount((currentCount) => {
            return currentCount + 3;
        });
    };

    //

    const counterBox: CSSProperties = {
        background: '#FFEED6',
        position: 'absolute',
        display: 'flex',

        alignItems: 'center',

        transform: 'translate(-50%, -50%)',
        top: '50%',
        left: '50%',

        width: '300px',
        height: '300px',
    };

    const counterA: CSSProperties = {
        background: '#FFE2E2',
        textAlign: 'center',
        alignItems: 'center',
        width: '50%',
        height: '50%',
    };
    const counterB: CSSProperties = {
        background: '#7288AE',

        textAlign: 'center',
        alignItems: 'center',
        width: '50%',
        height: '50%',
    };

    return (
        <div style={counterBox}>
            <div style={counterA} onClick={handleClick}>
                {count}
            </div>

            <div style={counterB} onClick={handleView}>
                {count}
            </div>
        </div>
    );
}

export default Counter;
