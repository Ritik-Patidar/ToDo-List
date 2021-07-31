import React, { useState } from 'react';
import MarkAs from './MarkAs';

const ListItem = (props) => {

    const [Done , setDone] = useState(false);

    return (
        <>
            <div className="todo_style">
                <div  onClick={()=>{ setDone(!Done) }}>
                    <MarkAs curValue={Done} ></MarkAs>
                </div>
                {  Done ?  <li><del className="todo_done">{props.item}</del></li> : <li>{props.item}</li>  }
                <i class="bi bi-trash" 
                    onClick={() => {
                        props.onSelect(props.id)
                    }}>
                </i>
            </div>
        </>
    );
};

export default ListItem;