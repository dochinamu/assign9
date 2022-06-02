import React from 'react'; //rsc 입력해서 틀 불러옴.
import SetNum from '../SetNum';
import SongList from '../SongList';

const Home = () => {
    return (
        <div>
            <SetNum />
            <SongList />
        </div>
    );
};

export default Home;