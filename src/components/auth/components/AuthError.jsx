import style from '@/components/auth/Auth.module.scss'

export default function AuthError({ errorValue }) {
    return (
        <>
            {errorValue && (
                <div className={style.AuthForm__Container__Error}>
                    <p className={style.AuthForm__Container__Error__Text}>
                        {errorValue}
                    </p>
                </div>
            )}
        </>
    )
}