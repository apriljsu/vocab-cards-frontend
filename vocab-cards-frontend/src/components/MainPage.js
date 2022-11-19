import React from 'react';
import {Link} from 'react-router-dom'

export default function MainPage() {
    return(
        <>
            <h2>Category</h2>
            <Link to='/animals'>Animals</Link><br />
            <Link to='/greetings'>Greetings</Link>
       </>

    )
}