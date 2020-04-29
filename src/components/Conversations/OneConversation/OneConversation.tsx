import React from 'react';
import './OneConversation.css';

export default function OneConversation(props: any) {
    const name = props.name

    return (
        <button className='conversation'>
            <p><b>{name}</b></p>
        </button>
    )
}