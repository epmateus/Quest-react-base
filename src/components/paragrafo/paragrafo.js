import React from 'react'

const Paragrafo = ({color, value}) => {
    return (
        <div>
            <p style={{color: color}}>{value.toUpperCase()}</p>
        </div>
    )
}

Paragrafo.defaultProps = {
    color: 'red',
    value: 'paragrafo'
}

export default Paragrafo