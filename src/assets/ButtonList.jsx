import React from 'react'
import LanguagesBtn from '../LanguagesBtn'

export default function ButtonList() {
    return (
        <div className='container'>
            <div className='row header'>
                <h3>Learn Web development</h3>
            </div>
            <div className='row'>
                <LanguagesBtn />
            </div>
        </div>
    )
}
