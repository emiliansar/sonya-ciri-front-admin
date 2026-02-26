import style from '@/components/auth/Auth.module.scss'
import { Outlet } from "react-router"

export default function AppAuth() {

    return (
        <>
            <div className={style.AuthLayout}>
                <div className={style.AuthLayout__Container}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}