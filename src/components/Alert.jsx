import React from 'react'
import { useState } from 'react'

const Alert = (props) => {
    const [dismiss, setdismiss] = useState("show")
    // if (props.Dismissible) {
        return <>
            {props && <div className={`d-flex alert alert-${props.alert.Type} alert-dismissible ${dismiss}`} role="alert"> 

                {/* material icon for tick success */}
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                <span className="pe-2 material-symbols-outlined">check</span>

                <div><strong>Success!</strong> {props.alert.Msg}.</div>
                <button type="button"  className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            
        
            </div>}
        </>
    // }
    // else {
    //     return(
    //         <div className='alert alert-success alert-dismissible fade show py-1' role="alert">

    //             <p> <strong>Success!</strong> {props.alertMsg}.</p>

    //         </div>
    //     ) 
    // }
}

export default Alert