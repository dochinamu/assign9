import React from 'react';
import {Link} from "react-router-dom"
import { Outlet } from 'react-router-dom';

const Menubar = () => {
    return (
        <div>
            <ul>
                <button>
                    <Link to="/1button">1번</Link>
                </button>
                <button>
                    <Link to="/2button">2번</Link>
                </button>
                <button>
                    <Link to="/home">home</Link>
                </button>
            </ul>

            <Outlet />
        </div>
    );
};

export default Menubar;