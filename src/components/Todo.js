import React from "react";

import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";




function Todo(props){
    //We call it inside the component function directly
    // It is a react Hook.

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler(){
        setModalIsOpen(true);

    }

    function closeModalHandler(){
        setModalIsOpen(false);
    }

    function deleteCard(){
        setModalIsOpen(false);
    }


    return (

    <div className='card'>
        <h2>{props.text}</h2>
        <div className='actions'>
            
            <button className='btn' onClick={deleteHandler}>Delete</button>  
        </div>

        { modalIsOpen && <Modal  onCancel={closeModalHandler} onConfirm={deleteCard}/>}
        { modalIsOpen && <Backdrop  onCancel={closeModalHandler}/>}
       
       
    </div>
    );
}

export default Todo;