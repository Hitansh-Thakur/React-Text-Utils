import React from 'react'
import { useState } from 'react'

const Alert = (props) => {
    const [dismiss, setdismiss] = useState(true)
    const [progressWidth, setprogressWidth] = useState(0)



        let MyTimeOut = setTimeout(() => {
            setprogressWidth(100)
        }, 3000);
        

    


    function handleClick() {
        setdismiss(false)
        props.alert.close()
        clearTimeout(MyTimeOut)

        MyTimeOut = setTimeout(() => {
            setprogressWidth(100)
        }, 3000);
        
    }

        return <>
        <style>
        {
          `
          @keyframes progressAnimation {
            0%{
                vi: 0%;
        
            }
            100%{
                width:100%;
            }
        }

        
        .animate{
            animation: progressAnimation 2000ms ease;
        }
            
            `
        }
        </style>
            {props && dismiss && <div className={`fixed d-flex alert my-0 alert-${props.alert.Type} alert-dismissible show fade`} role="alert"> 
                <button type="button" onClick={handleClick} className="btn-close" aria-label="Close"></button>

                {/* material icon for tick success */}
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                <span className="pe-2 material-symbols-outlined">check</span>

                <div><strong>Success!</strong> {props.alert.Msg}.</div>
            
        
            </div>}
            <div className="progress my-0 py-0" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: 2 + "px"}}>
                <div className="progress-bar bg-success animate" style={{width:`${progressWidth}%`}}></div>
            </div>

        </>
   
}

export default Alert