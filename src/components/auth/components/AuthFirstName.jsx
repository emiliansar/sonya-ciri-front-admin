import style from '@/components/auth/Auth.module.scss'

export default function AuthFirstName({ firstNameRef }) {
    return (
        <div className={style.AuthForm__Container__Name}>
            <label htmlFor="first_name">
                Имя
            </label>
            <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder='Соня'
                className={style.AuthForm__Container__Name__Input}
                ref={firstNameRef}
            />
        </div>
    )
}