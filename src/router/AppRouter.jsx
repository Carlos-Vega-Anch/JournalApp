import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/pages/journalRoutes"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/auth/*"  element={<AuthRoutes/>} />
        <Route path="/auth/*"  element={<JournalRoutes/>}/> 
    </Routes>
  )
}