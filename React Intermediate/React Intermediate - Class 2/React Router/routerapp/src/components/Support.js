import React from 'react';
import { useNavigate } from 'react-router-dom'

const Support = () => {
    const navigate = useNavigate();

    function clickHandler() {
        // Move to labs page
        navigate("/labs");
    }

    function backHandler(){
        navigate(-1);
    }

    return (
        <div>
            <div>
                This is Support Page
            </div>
            <button onClick={clickHandler}>Move Labs Page</button>
            <button onClick={backHandler}>GO Back</button>
        </div>
    )
}

export default Support