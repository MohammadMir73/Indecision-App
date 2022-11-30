import React from 'react';

const Action = (props) => (
        <div>
            <button
                className='big-button' 
                onClick={props.handlePick} 
                disabled = {!props.hasOptions}
            >
                Random Option
            </button>
        </div>
);


export default Action