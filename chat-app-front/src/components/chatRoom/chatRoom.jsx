import React from 'react';
import Contacts from './contacts/contacts';

const ChatRoom = () => {
    return(
        <React.Fragment>
             <div className="chatRoom h-lvh">
                <Contacts/>
             </div>
        </React.Fragment>
    )
}

export default ChatRoom