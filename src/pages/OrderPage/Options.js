import React from 'react'

function Options({name}) {
    return (
        <form>
            <input type='checkbox' id={`${name} option`} data-testid='test-option'/>
            <label htmlFor={`${name} option`}>{name}</label>
        </form>
    )
}

export default Options
