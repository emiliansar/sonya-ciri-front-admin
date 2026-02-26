import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000,
            cacheTime: 10 * 60 * 1000,
            refetchOnWindowFocus: false
        }
    }
})

export function Provider({ children }) {
    return (
        <QueryClientProvider client={ queryClient }>
            { children }
        </QueryClientProvider>
    )
}