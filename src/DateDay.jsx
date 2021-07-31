import React from 'react';
import { useState } from 'react';

const DateDay = () => {

    let date = new Date() ;
    
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['Jan' , 'Feb' , 'Mar' , 'Apr' , 'May' , 'Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec'];

    let curDate = date.getDate() ;
    let curDay = days[date.getDay()] ;
    let curMonth = months[date.getMonth()] ;

    const [CurrentDate , setCurTime] = useState({
        date: curDate,
        day: curDay,
        month: curMonth,
    }) ;

    const updateTime = () =>{
        curDate = date.getDate() ;
        curDay = days[date.getDay()] ;
        curMonth = months[date.getMonth()] ;
        
        setCurTime({
            date:curDate,
            day:curDay,
            month:curMonth,
        });
    }

    setInterval(updateTime,100000) ;

    return(
        <>
            <h3> {CurrentDate.day}, {CurrentDate.date} {CurrentDate.month}</h3>
        </>
    );
};

export default DateDay ;