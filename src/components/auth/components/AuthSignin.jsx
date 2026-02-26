import { useMutation } from "@tanstack/react-query"
import { Link, useNavigate } from "react-router"
import style from '@/components/auth/Auth.module.scss'
import AuthFirstName from './AuthFirstName'
import AuthLastName from './AuthLastName'
import AuthUniqueName from './AuthUniqueName'
import { MoveRight } from "lucide-react"
import AuthBtnAuth from "./AuthBtnAuth"
import { useAdminContext } from "@/context/admin-context"
import { useRef, useState } from "react"
import AuthError from "./AuthError"
import { authService } from "@/services/auth.service"

export default function AuthSignin() {
    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)
    const uniqueNameRef = useRef(null)
    const navigate = useNavigate()
    const [errorValue, setErrorValue] = useState('')
    const { enterAccount } = useAdminContext()

    const {mutate, isPending} = useMutation({
        mutationKey: ['signin'],
        mutationFn: (dto) => authService.signin(dto),
        onSuccess: (data) => {
            console.log(data)
            enterAccount(data)
            navigate('/')
        },
        onError: (e) => {
            setErrorValue(e.response?.data?.message || e.message || "Ошибка")
        }
    })

    const signin = () => {
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

        mutate(dto)
    }

    return (
        <>
          <div className={`${style.AuthForm} ${style.AuthFormSignup}`}>
            <div className={style.AuthForm__Container}>
                <p className={style.AuthForm__Container__Title}>
                    Авторизация
                </p>
                <AuthFirstName firstNameRef={firstNameRef} />
                <AuthLastName lastNameRef={lastNameRef} />
                <AuthUniqueName uniqueNameRef={uniqueNameRef} />

                <AuthError errorValue={errorValue} />

                <AuthBtnAuth
                    signin={signin}
                    isPending={isPending}
                />
                <div className={style.AuthForm__Container__OtherLinks}>
                    <span>
                        Нет аккаунта?
                        <Link
                            to={'/auth/signup'}
                        >
                            Зарегистрироваться
                            <MoveRight />
                        </Link>
                    </span>
                </div>
            </div>
          </div>
        </>
    )
}