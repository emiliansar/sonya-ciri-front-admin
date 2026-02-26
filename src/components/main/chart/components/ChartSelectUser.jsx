import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useChartContext } from "@/context/chart-context";
import { useSearchContext } from "@/context/search-context";
import { useEffect, useState } from "react";

export default function ChartSelectUser() {
    const { results } = useSearchContext()
    const { changeCurrentUserId } = useChartContext()

    const [user, setUser] = useState(0)

    const [isDisabled, setIsDisabled] = useState(false)

    const handleUser = (value) => {
        setUser(value)
        changeCurrentUserId(value)
    }

    useEffect(() => {
        if (results.length > 0) {
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
    }, [results])

    return (
        <div className="max-w-[250px] w-full flex flex-col items-start gap-1">
            <Select
                items={results}
                onValueChange={handleUser}
                value={user}
                className="w-full"
                disabled={isDisabled}
            >
              <SelectTrigger>
                <SelectValue placeholder="Выберите пользователя" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {results.map((user) => (
                    <SelectItem key={user.id} value={user.id}>
                      <div className="w-full flex flex-col gap-1 items-start">
                        <div className="w-full flex items-center justify-between gap-1">
                            <p>{user.first_name}</p>
                            <p>{user.last_name}</p>
                        </div>
                        {/* <div className="w-full text-left">
                            <p>{user.unique_name}</p>
                        </div> */}
                      </div>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="">
                <p className="text-gray-500 font-medium text-[14px]">
                    {isDisabled ? "Найдите пользователей по тегу" : "Выберите пользователя"}
                </p>
            </div>
        </div>
    )
}