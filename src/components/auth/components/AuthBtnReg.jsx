import style from '@/components/auth/Auth.module.scss'

export default function AuthBtnReg({ signup, isPending }) {

    return (
        <div className={style.AuthForm__Container__ButtonSub}>
            <button
                type="button"
                className={style.AuthForm__Container__ButtonSub__Submit}
                onClick={signup}
                disabled={isPending}
            >
                Создать аккаунт
            </button>
        </div>
    )
}