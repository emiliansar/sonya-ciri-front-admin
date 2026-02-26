import style from '@/components/main/layout/Main.module.scss'

export default function AdminButtonSave({ saveAdmin, isPending }) {
    return (
        <div className={style.UserForm__ButtonSave}>
            <button
                onClick={saveAdmin}
                className={style.UserForm__ButtonSave__Button}
                disabled={isPending}
            >
                Сохранить
            </button>
        </div>
    )
}