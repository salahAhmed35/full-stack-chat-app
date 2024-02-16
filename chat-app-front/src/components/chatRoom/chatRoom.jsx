import React from 'react';
import Contacts from './contacts/contacts';
import Header from './header/header';
import Conversation from './conversation/conversation';
const ChatRoom = () => {
    return(
        <React.Fragment>
             <div className="chatRoom h-lvh">
                <Contacts/>
                <Header />
                <Conversation/>
             </div>
        </React.Fragment>
    )
}

export default ChatRoom