import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query"
import { BrowserRouter } from "react-router-dom"
import AuthProvider from './contexts/Auth'
import history from "./utils/history"
const queryClient = new QueryClient()
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter history={history} >
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
