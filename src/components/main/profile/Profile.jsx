import style from '@/components/main/layout/Main.module.scss'
import { useAdminContext } from "@/context/admin-context"
import { adminService } from "@/services/admin.service"
import { useMutation } from "@tanstack/react-query"
import { useRef, useState } from "react"
import AdminButtonDelete from "./components/AdminButtonDelete"
import AdminFirstName from "./components/AdminFirstName"
import AdminLastName from "./components/AdminLastName"
import AdminUniqueName from "./components/AdminUniqueName"
import AdminError from "./components/AdminError"
import AdminButtonSave from "./components/AdminButtonSave"

export default function MainProfile() {
    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)
    const uniqueNameRef = useRef(null)

    const {
        admin,
        access_token,
        refresh_token,
        changeAccessToken,
        enterAccount,
        outAccount
    } = useAdminContext()

    const [errorValue, setErrorValue] = useState(null)

    const {
        mutate: adminMutate,
        isPending: adminIsPending
    } = useMutation({
        mutationKey: ['patch'],
        mutationFn: (dto) => adminService.patchAdmin(
            access_token,
            refresh_token,
            changeAccessToken,
            dto
        ),
        onSuccess: (data) => {
            console.log(data)
            enterAccount(data)
        },
        onError: (e) => {
            setErrorValue(e.response?.data?.message || e.message || "Ошибка")
        }
    })

    const saveAdmin = () => {
        if (
            firstNameRef.current.value == admin.first_name &&
            lastNameRef.current.value == admin.last_name &&
            uniqueNameRef.current.value == admin.unique_name
        ) {
            return
        }

        console.log('Сохранения... save')

        setErrorValue('')

        const dto = {
            first_name: firstNameRef.current.value,
            last_name: lastNameRef.current.value,
            unique_name: uniqueNameRef.current.value
        }

        if (
            !dto.first_name
            || !dto.last_name
            || !dto.unique_name
        ) {
            return setErrorValue("Форма не заполнена")
        }

        adminMutate(dto)
    }

    const {
        mutate: adminDelete,
        isPending: adminDeleteIsPending
    } = useMutation({
        mutationKey: ['delete'],
        mutationFn: () => adminService.deleteAdmin(
            access_token,
            refresh_token,
            changeAccessToken
        ),
        onSuccess: (data) => {
            console.log(data)
            outAccount()
            navigate('/auth')
        },
        onError: (e) => {
            setErrorValue(e.response?.data?.message || e.message || "Ошибка")
        }
    })

    const deleteAdmin = () => {
        const isDelete = confirm("Вы уверены что хотите удалить аккаунт?")

        if (isDelete) {
            adminDelete()
        }
    }

    return (
        <div className={style.UserForm}>
            <div className={style.UserForm__Container}>
                <p className={style.UserForm__Title}>Я</p>

                <AdminFirstName
                    defaultValue={admin.first_name}
                    firstNameRef={firstNameRef}
                />
                <AdminLastName
                    defaultValue={admin.last_name}
                    lastNameRef={lastNameRef}
                />
                <AdminUniqueName
                    defaultValue={admin.unique_name}
                    uniqueNameRef={uniqueNameRef}
                />

                <AdminError errorValue={errorValue} />

                <AdminButtonSave
                    saveAdmin={saveAdmin}
                    isPending={adminIsPending}
                />

                <AdminButtonDelete
                    deleteAdmin={deleteAdmin}
                    isPending={adminDeleteIsPending}
                />
            </div>
        </div>
    )
}