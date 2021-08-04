import React from 'react';
import '../styles/components/TopBar.css';

function TopBar(props) {
    return (
        <div className='TopBar'>
            <h1>Drinks On Me</h1>
            <div id='filterContainer'>
                <span>Placeholder, no filter items as of yet.</span>
            </div>
        </div>
    );
}

export default TopBar;