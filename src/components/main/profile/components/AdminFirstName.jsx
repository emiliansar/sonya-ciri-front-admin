import style from '@/components/main/layout/Main.module.scss'

export default function AdminFirstName({ defaultValue, firstNameRef }) {
    return (
        <div className={style.UserForm__Name}>
            <label
                htmlFor="first_name"
                className={style.UserForm__Name__Label}
            >
                Имя
            </label>
            <input
                type="text"
                placeholder='Соня'
                className={style.UserForm__Name__Input}
                defaultValue={defaultValue}
                ref={firstNameRef}
            />
        </div>
    )
}