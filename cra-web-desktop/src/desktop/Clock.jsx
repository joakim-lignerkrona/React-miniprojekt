import React, { useState, useEffect } from "react"


function Clock () {
    const [date, setDate] = useState(new Date());


    useEffect(() => {
        const interval = setInterval(() => {
           setDate(new Date());
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    return (
        <span className="clock"> 
            {date.toLocaleTimeString('sv-SE')}
        </span>
    );
}
export default Clock;
