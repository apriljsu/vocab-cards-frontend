import React from 'react';
import {Link} from 'react-router-dom'

export default function MainPage() {
    return(
        <>
            <h2>Category</h2>
            <Link to='/animals'>Animals</Link><br />
            <Link to='/weather'>Weather</Link><br />
            <Link to='/greeting'>Greeting</Link><br />
            <Link to='/transport'>Transport</Link><br />
            <Link to='/yourown'>Your Own Cards</Link><br />
       </>

    )
}