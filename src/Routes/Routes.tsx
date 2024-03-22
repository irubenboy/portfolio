import { Route, Routes as ReactRoutes } from 'react-router-dom'
import HomePage from '../pages/Home/Home'
import NotFound404Page from '../pages/404/404'
import AboutPage from '../pages/About/About'

export default function Routes() {
    return (
        <ReactRoutes>
            <Route path='/' element={
                <HomePage />
            }
            />
            <Route path='/about' element={
                <AboutPage />
            }
            />
            <Route path='/*' element={
                <NotFound404Page />
            }
            />
        </ReactRoutes>
    )
}
