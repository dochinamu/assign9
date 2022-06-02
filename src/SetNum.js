import React, {useState} from 'react'; //rsc 입력해서 틀 불러옴.

const SetNum = () => {
    const [num, setNum] = useState(0);

    function onClickPlus() {
        setNum(num+1)
    };

    function onClickMinus() {
        setNum(num-1)
    };

    return (
        <div className='Number1' >
            <div>
                <h1>1번</h1>
                <br></br>
                <h1>{num}</h1>
                <br></br>
                <button onClick = {onClickPlus}>+1</button>
                <button onClick = {onClickMinus}>-1</button>
            </div>
        </div>
    );
};

export default SetNum;