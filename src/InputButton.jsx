import React from 'react';
import { Button } from 'react-bootstrap';


const InputButton = (props) => {

    var currentState = props.activeStatus ? "open-input" : "close-input" ;

    return (
        <>
            <Button className={"add_button " + currentState} onClick={() => props.setActive(!props.activeStatus)} >
                <i class="bi bi-plus-lg"></i>
            </Button>
        </>
    );
}

export default InputButton;