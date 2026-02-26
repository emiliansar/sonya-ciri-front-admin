import style from '@/components/auth/Auth.module.scss'

export default function AuthBtnAuth({
    signin,
    isPending
}) {

    return (
        <div className={style.AuthForm__Container__ButtonSub}>
            <button
                type="button"
                className={style.AuthForm__Container__Button__Submit}
                onClick={signin}
                disabled={isPending}
            >
                Войти
            </button>
        </div>
    )
}