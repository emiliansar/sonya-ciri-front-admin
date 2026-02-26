import { ChartLine, FingerprintPattern, IdCard, User } from "lucide-react";
import { Link } from "react-router";

export default function MainPage() {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="max-w-[400px] w-full flex flex-col items-center gap-6 mt-12">
                <Link
                    to="/profile"
                    className="profile-link"
                >
                    <span>Профиль</span>
                    <User />
                </Link>
                <Link
                    to="/chart"
                    className="profile-link"
                >
                    <span>График</span>
                    <ChartLine />
                </Link>
                <Link
                    to="/auth"
                    className="profile-link"
                >
                    <span>Аутентификация</span>
                    <FingerprintPattern />
                </Link>
            </div>
        </div>
    )
}