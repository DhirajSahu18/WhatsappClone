// we can share the information stored in context page to all the pages in our site
import React,{createContext, useState} from 'react'
export const AccountContext = createContext(null);

// children -- app ka andhr ka messages wala Component
const AccountProvider = ({children}) => {

    const [account, setAccount] = useState(); // stores sender's information
    const [person, setPerson] = useState({}); // stores receiver's information

  return (
    <>
        <AccountContext.Provider value={{ account, setAccount, person, setPerson}}>
          {children}
        </AccountContext.Provider>
    </>
  )
}

export default AccountProvider