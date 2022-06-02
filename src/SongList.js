import React, {useState} from 'react'; //rsc 입력해서 틀 불러옴.
<link rel='stylesheet' href='style.css'></link>

const SongList = () => {
    let [music, setMusic] = useState(["I've - Love Dive",'(G)-Idle - Tomboy','Le Sserafim - FEARLESS']);

    function changingSong() {
        setMusic(['Aespa - Next Level', '(G)-Idle - Tomboy', 'Le Sserafim - FEARLESS'])
    }

    return (
        <div className='Num1'>
            <br></br>
                <h1>2번</h1>
                <h2>저의 최애 곡들을 소개합니다!</h2>
                <div>
                    <ul>
                        <li>{music[0]}</li>
                        <li>{music[1]}</li>
                        <li>{music[2]}</li>
                    </ul>    
                </div>
                <button onClick = {changingSong}>곡 변경</button>   
        </div>
    );
};

export default SongList;