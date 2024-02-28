/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import UserContext from './UserContext'

// eslint-disable-next-line no-unused-vars
const UserContextProvider = ({ children }) => {

    const [user, setUser] = React.useState(null)
    return (

        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )



}

export default UserContextProvider