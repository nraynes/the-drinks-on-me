import React from 'react';
import '../styles/components/TopBar.css';


function TopBar(props) {
    let { ofAge, setRender } = props;


    function returnCheckBox() {
        if (ofAge) {
            return (
                <input checked={props.nonA} onChange={(e) => {
                    e.preventDefault()
                    props.setNonA(!props.nonA)
                }} id='nonACheck' type='checkbox'></input>
            );
        } else if (!ofAge) {
            return (
                <input disabled checked={true} id='nonACheck' type='checkbox'></input>
            );
        }
    }


    return (
        <div className='TopBar'>
            <h1 onClick={()=> setRender(Math.random())}>Drinks On Me</h1>
            <div id='filterContainer'>
                <form>
                    {/* <input id='nameInput' name='nameInput' type='text' placeholder='Your name...'></input> */}
                    <div>
                        {returnCheckBox()}
                        <label for='nonACheck'>Non-Alchoholic</label>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TopBar;