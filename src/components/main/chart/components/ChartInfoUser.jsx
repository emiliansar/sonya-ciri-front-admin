import { useChartContext } from "@/context/chart-context"

export default function ChartInfoUser() {
    const { currentUserId, currentUser } = useChartContext()

    if (!currentUserId) {
        return null
    }

    return (
        <div className="flex items-center gap-2 bg-gray-700 p-3 rounded-xl">
            <p className="text-white text-base font-medium">{currentUser.unique_name}</p>
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <p className="text-white text-base font-medium">{currentUser.chronotypes?.[0].type}</p>
        </div>
    )
}