import React from 'react' ;
import { Button } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap';


const ToggleButton = (eventKey) =>{

    return(
        <Button
            className="add_button"
            type="button"
            onClick={useAccordionButton(eventKey)}
        >
        +
        </Button>
    );

}

export default ToggleButton ;