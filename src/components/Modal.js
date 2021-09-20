import React from "react";

function Modal(props){

    // The Cancel Button.
    function cancelHandler(){
        props.onCancel();

    }
// The Confirm Vutton
    function confirmHandler(){
        props.onConfirm();

    }


    return(
        <div className='modal'>
           
            <p>Are You Sure?</p>
            <button className='btn btn--alt' onClick={cancelHandler}>Cancel</button>
            <button className='btn' onClick={confirmHandler}>Confirm</button>
        
        </div>
    );
}

export default Modal;