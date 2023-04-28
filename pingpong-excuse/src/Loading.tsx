import React from "react";
import logo from '../src/assets/giphy.gif'

const Loading: React.FC = () => (
    <div>
        <div>Loading...</div>
        <img src={logo} alt="loading"  width="250" />
    </div>
 
);

export default Loading;