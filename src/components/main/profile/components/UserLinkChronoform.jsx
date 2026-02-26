import style from '@/components/main/layout/Main.module.scss'
import { SquareArrowOutUpRight } from 'lucide-react'
import { Link } from 'react-router'

export default function UserLinkChronoform() {
    return (
        <div className={style.UserForm__LinkCF}>
            <Link
                to={`/chronoform`}
            >
                <span>Моя анкета</span>
                <SquareArrowOutUpRight />
            </Link>
        </div>
    )
}