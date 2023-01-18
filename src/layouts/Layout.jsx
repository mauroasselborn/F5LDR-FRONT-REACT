import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = () => {
    const navigation = useNavigation()

    return (
        <div>
            <Navbar />
            <main className="container">
                {navigation.state === 'loading' && <div className="alert alert-info my-5">Loading...</div>}
                <Outlet />
            </main>
        </div>
    )
}
export default Layout
