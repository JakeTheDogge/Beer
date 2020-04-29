import React from 'react';
import Conversations from '../components/Conversations/Conversations';
import ConvHeader from '../components/Conversations/ConvHeader/ConvHeader'
import Footer from '../components/Footer/Footer'

export default function ConversationsPage() {
    const fetchConvs = () => {
        return [
            {
              name: 'Antosha',
              id: 1
            },
            {
              name: 'Vasya',
              id: 2
            },
            {
              name: 'Mom',
              id: 3
            }
          ]
    }

    return (
        <>
            <ConvHeader/>
            <Conversations conversations={fetchConvs()}/>
            <Footer/>
        </> 
        )
}