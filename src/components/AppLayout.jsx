import { BrowserRouter, Route, Routes } from "react-router";
import AuthLayout from '@/components/auth/AuthLayout';
import AuthSignup from "@/components/auth/components/AuthSignup";
import AuthSignin from "@/components/auth/components/AuthSignin";
import MainLayout from "@/components/main/layout/MainLayout";
import SearchTest from "@/components/main/search/SearchTest";
import MainPage from "@/components/main/main-page/MainPage";
import MainProfile from "@/components/main/profile/Profile";
import MainChart from "@/components/main/chart/MainChart";

export default function AppLayout() {
    return (
        <>
            <BrowserRouter basename="/admin">
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<MainPage />} />
                        <Route path='profile' element={<MainProfile />} />
                        <Route path='chart' element={<MainChart />} />
                        {/* <Route path='search' element={<SearchTest />} /> */}
                    </Route>
                    <Route path="/auth" element={<AuthLayout />}>
                        <Route index element={<AuthSignin />} />
                        <Route path='signin' element={<AuthSignin />} />
                        <Route path='signup' element={<AuthSignup />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}