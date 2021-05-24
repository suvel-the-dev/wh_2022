import { createContext, useState } from 'react'

const MessageContext = createContext({ name: "hi" });

export const MessageProvider = ({ children }) => {
    const [msg, setMsg] = useState({
        show: false,
        content: ""
    });
    const value = { msg, setMsg }
    return (
        <MessageContext.Provider value={value}>
            {children}
        </MessageContext.Provider>
    )
}
export default MessageContext;