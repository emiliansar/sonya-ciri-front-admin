import style from '@/components/main/layout/Main.module.scss'

export default function AdminLastName({ defaultValue, lastNameRef }) {
    return (
        <div className={style.UserForm__Name}>
            <label
                htmlFor="last_name"
                className={style.UserForm__Name__Label}
            >
                Фамилия
            </label>
            <input
                type="text"
                placeholder='Смирнова'
                className={style.UserForm__Name__Input}
                defaultValue={defaultValue}
                ref={lastNameRef}
            />
        </div>
    )
}