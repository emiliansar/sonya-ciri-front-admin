import Chart from "@/components/main/chart/components/Chart";
import ChartInfoUser from "@/components/main/chart/components/ChartInfoUser";
import ChartInputSearch from "@/components/main/chart/components/ChartInputSearch";
import ChartSelectUser from "@/components/main/chart/components/ChartSelectUser";

export default function MainChart() {
    return (
        <div className="w-full h-screen">
            <div className="max-w-[1440px] w-full p-3 my-0 mx-auto flex items-center justify-center">
                <div className="w-full mt-12 flex flex-col items-center justify-center">
                    <div className="max-w-[600px] w-full">
                        <ChartInputSearch />
                    </div>

                    <div className="max-w-[600px] w-full flex justify-between items-start mt-[50px]">
                        <ChartSelectUser />
                        <ChartInfoUser />
                    </div>

                    <div className="w-full mt-[50px]">
                        <Chart />
                    </div>
                </div>
            </div>
        </div>
    )
}