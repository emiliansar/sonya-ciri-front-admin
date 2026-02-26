import { Outlet, useNavigate } from 'react-router'
import style from './Main.module.scss'
import { useEffect } from 'react'
import { useAdminContext } from '@/context/admin-context'

export default function MainLayout() {
    const { adminId } = useAdminContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (!adminId) {
            navigate('/auth')
        }
    }, [adminId])

    return (
        <div className={style.MainLayout}>
            <div className={style.MainLayout__Container}>
                <Outlet />
            </div>
        </div>
    )
}