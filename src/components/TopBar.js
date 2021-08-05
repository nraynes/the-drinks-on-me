import React from 'react';
import '../styles/components/TopBar.css';

function TopBar(props) {
    return (
        <div className='TopBar'>
            <h1>Drinks On Me</h1>
            <div id='filterContainer'>
                <form>
                    <input id='nameInput' name='nameInput' type='text' placeholder='Your name...'></input>
                    <div>
                        <input checked={props.nonA} onChange={(e) => {
                            e.preventDefault()
                            props.setNonA(!props.nonA)
                        }} id='nonACheck' type='checkbox'></input>
                        <label for='nonACheck'>Non-Alchoholic</label>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TopBar;