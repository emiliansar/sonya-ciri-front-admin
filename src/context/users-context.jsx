import { createContext, useContext, useState } from "react";

const UsersContext = createContext({
    users: []
})

export function UsersContextProvider({ children }) {
    const [users, setUsers] = useState([])

    const addUsers = (array) => {
        setUsers(prev => [...new Set([...prev, ...array])])
    }

    const value = {
        users,
        addUsers
    }

    return (
        <UsersContext.Provider value={value}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersContext

export function useUsersContext() {
    return useContext(UsersContext)
}