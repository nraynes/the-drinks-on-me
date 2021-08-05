import React from 'react';
import '../styles/components/TopBar.css';

function TopBar(props) {
    return (
        <div className='TopBar'>
            <h1>Drinks On Me</h1>
            <div id='filterContainer'>
                <form>
                    <input name='nameInput' type='text' placeholder='Your name...'></input>
                </form>
            </div>
        </div>
    );
}

export default TopBar;