import { useSearchContext } from "@/context/search-context"
import { useEffect } from "react"

export default function SearchTest() {
    const {
        tag,
        results,
        changeTag
    } = useSearchContext()

    const search = () => {
        changeTag('emilian')
    }

    // useEffect(() => {
    //     changeTag('emilian')
    // }, [])

    useEffect(() => {
        if (results.length > 0) {
            console.log(results)
        }
    }, [results])

    return (
        <div>
            <h1>Search Test</h1>
            <button onClick={search}>Искать "emilian"</button>
        </div>
    )
}