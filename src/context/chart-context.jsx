import { createContext, useContext, useEffect, useState } from "react";
import { useUsersContext } from "./users-context";

const ChartContext = createContext({
    currentUserId: 0,
    currentUser: {},
    type: 'personal'
})

export function ChartContextProvider({ children }) {
    const { users } = useUsersContext()

    const [currentUserId, setCurrentUserId] = useState(0)
    const [currentUser, setCurrentUser] = useState({})
    const [type, setType] = useState('personal')

    const changeType = (new_type) => {
        if (new_type !== 'personal' || new_type !== 'common') {
            return console.log('Invalid type: ', new_type)
        }

        setType(new_type)
    }

    useEffect(() => {
        if (currentUserId) {
            setCurrentUser(users.find((user) => user.id === currentUserId))
        }
    }, [currentUserId])

    const value = {
        currentUserId,
        changeCurrentUserId: setCurrentUserId,
        currentUser,
        type,
        changeType
    }

    return (
        <ChartContext.Provider value={value}>
            {children}
        </ChartContext.Provider>
    )
}

export default ChartContext

export function useChartContext() {
    return useContext(ChartContext)
}