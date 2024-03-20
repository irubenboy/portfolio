import { Route, Routes as ReactRoutes } from 'react-router-dom'
import HomePage from '../pages/Home/Home'

export default function Routes() {
    return (
        <ReactRoutes>
            <Route path='/' element={
                <HomePage />
            }
            />
            <Route path='/*' element={
                <center>Not found</center>
            }
            />
        </ReactRoutes>
    )
}
