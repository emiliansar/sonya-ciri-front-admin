import { createContext, useContext, useEffect, useState } from "react";
import { useUsersContext } from "@/context/users-context";
import { useQuery } from "@tanstack/react-query";
import { searchService } from "@/services/search.service";
import { useAdminContext } from "./admin-context";

const SearchContext = createContext({
    tag: '',
    results: []
})

export function SearchContextProvider({ children }) {
    const [tag, setTag] = useState('')
    const [results, setResults] = useState([])

    const { users, addUsers } = useUsersContext()
    const { access_token, refresh_token, changeAccessToken } = useAdminContext()

    const {
        isLoading: isLoadingSearch,
        data: dataSearch,
        isError: isErrorSearch,
        error: errorSearch,
        refetch: refetchSearch,
        isSuccess: isSuccessSearch
    } = useQuery({
        queryKey: ['search on tag: ', tag],
        queryFn: () => searchService.search(
            access_token,
            refresh_token,
            changeAccessToken,
            tag.split(" ").join("+")
        ),
        enabled: false,
        retry: 0
    })

    const changeTag = (text) => {
        console.log("ChangeTag получил text: ", text)
        if (!text.trim() || text.trim() === '') {
            return console.log("Текст не прошёл проверку: ", text)
        }

        console.log("Изменение тега: ", text)

        setTag(text)
    }

    useEffect(() => {
        if (tag === '') {
            console.log("Изменение тега пусто: ", tag)
            setResults([])
            return
        }

        if (isLoadingSearch || !isSuccessSearch) {
            console.log("Загрузка данных: ", text)
            return
        }

        const filteredData = users?.filter(user => user?.chronoform?.[0]?.tag === tag)

        if (filteredData?.length > 0) {
            setResults(filteredData)
            console.log("Назначаю отфильтрованные данные: ", filteredData)
        } else {
            console.log("filteredData пусто")
            refetchSearch()
        }
    }, [tag, users])

    useEffect(() => {
        if (dataSearch?.length > 0 && !isErrorSearch) {
            console.log("dataSearch изменился: ", dataSearch)
            addUsers(dataSearch)
        }
    }, [dataSearch])

    const value = {
        tag,
        results,
        changeTag
    }

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContext

export function useSearchContext() {
    return useContext(SearchContext)
}