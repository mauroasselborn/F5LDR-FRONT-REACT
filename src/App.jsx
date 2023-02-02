import { useState } from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import { Form } from './components/Form'
import { Navbar } from './components/NavBar'

const Root = () => {
    const navigation = useNavigation()

    const [contador, setContador] = useState(0)

    return (
        <>
            <Navbar />
            <main
                className="container-fluid"
                style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', margin: '10px 10px' }}
            >
                {navigation.state === 'loading' && <div className="alert alert-info my-5">Loading...</div>}
                <Form />
                <button onClick={() => setContador(contador + 1)}>{contador}</button>
                <Outlet />
            </main>
        </>
    )
}
export default Root
