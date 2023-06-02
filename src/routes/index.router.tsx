import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import { Home } from '../screens/Home';
import { Login } from '../screens/Login';
import { Sales } from '../screens/Sales';
import { Stock } from '../screens/Stock';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sales" element={<Sales />} />
                <Route path="/stock" element={<Stock />} />
            </Routes>
        </BrowserRouter>
    )
}