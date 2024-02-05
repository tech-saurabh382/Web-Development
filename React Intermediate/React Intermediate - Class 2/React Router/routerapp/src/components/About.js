import React from 'react';
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();

    function clickHandler() {
        // Move to support page
        navigate("/support");
    }

    return (
        <div>
            <div>
                This is About Page
            </div>
            <button onClick={clickHandler}>Move Support Page</button>
        </div>
    )
}

export default About