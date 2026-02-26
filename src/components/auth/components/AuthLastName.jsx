import style from '@/components/auth/Auth.module.scss'

export default function AuthLastName({ lastNameRef }) {
    return (
        <div className={style.AuthForm__Container__Name}>
            <label htmlFor="last_name">
                Фамилия
            </label>
            <input
                type="text"
                name="last_name"
                id="last_name"
                placeholder='Смирнова'
                className={style.AuthForm__Container__Name__Input}
                ref={lastNameRef}
            />
        </div>
    )
}