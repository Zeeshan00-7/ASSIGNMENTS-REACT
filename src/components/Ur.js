import React from 'react'
import { useRef } from 'react'

export default function FilePicker() {
    const refe = useRef();
    function handleClick() {
        refe.current.click();
    }

    return (
        <div
            style={{
                marginTop: '100px',
                backgroundColor: 'creame'
            }}
        >
            <input
                ref={refe} type='file'
                style={{ color: 'orange' }}
            />
            <button
                onClick={handleClick}
                style={{ color: 'red', backgroundColor: 'orange', borderWidth: '50%' }}
            >PICK THE FILE</button>

        </div>

    )
} 