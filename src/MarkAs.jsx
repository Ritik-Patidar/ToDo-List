import React from 'react' ;

const MarkAs = (props) =>{
    if(props.curValue){
        return(
            <div className="status" style={{backgroundColor:'green'}}>
                <i className="bi bi-check"></i>
            </div>
        );
    }
    else{
        return(
            <div className="status">
                <i className="bi bi-x"></i>
            </div>
        );
    }
};

export default MarkAs ;