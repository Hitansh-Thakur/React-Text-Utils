import React from 'react'



export const Summary = (props) => {
  return (
    <div>
        <h2>Text SUMMARY</h2>
        <div className="container my-4">
            <p className='lh-1 fs-5'>Words: {props.WordCnt}</p>
            <p className='lh-1 fs-5'>Characters: {props.CharCnt}</p>
            <p className='lh-1 fs-5'>Lines: {props.LineCnt}</p>
        </div>
    </div>
  )
}
