import React from 'react';
import './Conversations.css';
import OneConversation from './OneConversation/OneConversation';

export default function Conversations(props : any) {
    let converstions = props.conversations;

    return (
        <div className='conversations'>
            {converstions.map((item: any) =>  <OneConversation {...item} key={item.id}/> ) }
        </div>
    )
}