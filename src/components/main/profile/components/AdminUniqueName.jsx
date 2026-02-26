import style from '@/components/main/layout/Main.module.scss'

export default function AdminUniqueName({ defaultValue, uniqueNameRef }) {
    return (
        <div className={style.UserForm__Name}>
            <label
                htmlFor="uniqueNameRef_name"
                className={style.UserForm__Name__Label}
            >
                Уникальное имя
            </label>
            <input
                type="text"
                placeholder='sonya'
                className={style.UserForm__Name__Input}
                defaultValue={defaultValue}
                ref={uniqueNameRef}
            />
        </div>
    )
}