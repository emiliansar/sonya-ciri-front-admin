import style from '@/components/auth/Auth.module.scss'

export default function AuthUniqueName({ uniqueNameRef }) {
    return (
        <div className={style.AuthForm__Container__Name}>
            <label htmlFor="unique_name">
                Уникальное имя
            </label>
            <input
                type="text"
                name="unique_name"
                id="unique_name"
                placeholder='sonya'
                className={style.AuthForm__Container__Name__Input}
                ref={uniqueNameRef}
            />
        </div>
    )
}