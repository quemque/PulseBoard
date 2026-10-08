import { lazy, Suspense } from 'react'
import { Header } from '@/components/ui/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Loading } from './components/ui/Loading'

const Dashboard = lazy(() => import('@/pages/Dashboard'))
const Settings = lazy(() => import('@/pages/Settings'))

export default function App() {
   return (
      <BrowserRouter basename={import.meta.env.BASE_URL}>
         <Header />
         <Suspense fallback={<Loading />}>
            <Routes>
               <Route path="/" element={<Dashboard />} />
               <Route path="/settings" element={<Settings />} />
            </Routes>
         </Suspense>
      </BrowserRouter>
   )
}
