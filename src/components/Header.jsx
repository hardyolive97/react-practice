import React from 'react'

const Header = (props) => {
    return (
        <header>
            <h1>My App is {props.appName} and its rated {props.Rating}, made by {props.developer}</h1>
        </header>
    )
}

export default Header
