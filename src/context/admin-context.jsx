import { createContext, useState, useContext } from "react";

const AdminContext = createContext({
    isAuth: false,
    adminId: 0,
    admin: {},
    access_token: '',
    refresh_token: '',
    ctxLoading: false
})

export function AdminContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false)
    const [adminId, setAdminId] = useState(0)
    const [admin, setAdmin] = useState({})
    const [access_token, setAccessToken] = useState('')
    const [refresh_token, setRefreshToken] = useState('')
    const [ctxLoading, setCtxLoading] = useState(false)

    const enterAccount = (admin) => {
        setAdminId(admin.id)
        setAdmin(admin)
        setAccessToken(admin.access_token)
        setRefreshToken(admin.refresh_token)
        setIsAuth(true)
    }

    const outAccount = () => {
        setAdminId(0)
        setAdmin({})
        setAccessToken('')
        setRefreshToken('')
        setIsAuth(false)
    }

    const changeAccessToken = (token) => {
        setAccessToken(token)
    }

    const value = {
        isAuth,
        adminId,
        admin,
        access_token,
        refresh_token,
        ctxLoading,
        enterAccount,
        outAccount,
        changeAccessToken,
    }

    return (
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    )
}

export default AdminContext

export function useAdminContext() {
    return useContext(AdminContext)
}