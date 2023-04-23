import React from 'react'

export const TextBox = (props) => {
    return (
        <>

            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label fs-5 ">{props.title}</label>
                <textarea onChange={props.onChange} value={props.value} className="form-control border-2 border-primary" style={{resize: 'none'}} id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>

        </>
    )
}

TextBox.defaultProps = {
    title: "Enter Text"
}
