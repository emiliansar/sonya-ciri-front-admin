import './App.css'
import { Provider } from '@/context/provider'
import { AdminContextProvider } from '@/context/admin-context'
import { SearchContextProvider } from '@/context/search-context'
import AppLayout from '@/components/AppLayout'
import { UsersContextProvider } from './context/users-context'
import { ChartContextProvider } from './context/chart-context'

export default function App() {
  return (
    <Provider>
      <AdminContextProvider>
        <UsersContextProvider>
          <SearchContextProvider>
            <ChartContextProvider>
              <AppLayout />
            </ChartContextProvider>
          </SearchContextProvider>
        </UsersContextProvider>
      </AdminContextProvider>
    </Provider>
  )
}

