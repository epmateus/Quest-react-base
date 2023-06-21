import React from 'react'

const Button = ( {label}) => {
    const alertMessage = () => {alert('A label desse botão é ' + label)}
    return (
        <button onClick={alertMessage}>{label}</button>
    );
}

Button.defaultProps = {
    label: 'baixar CV'
}

export default Button