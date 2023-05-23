import React from 'react'
import { useState } from 'react'

const Alert = (props) => {
    const [dismiss, setdismiss] = useState(true)

        console.log(props.alert);

    function handleClick() {
        setdismiss(false)
        props.alert.close()
    }

        return <>
            {props && dismiss && <div className={`d-flex alert alert-${props.alert.Type} alert-dismissible show`} role="alert"> 
                <button type="button" onClick={handleClick} className="btn-close" aria-label="Close"></button>

                {/* material icon for tick success */}
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                <span className="pe-2 material-symbols-outlined">check</span>

                <div><strong>Success!</strong> {props.alert.Msg}.</div>
            
        
            </div>}
        </>
   
}

export default Alert