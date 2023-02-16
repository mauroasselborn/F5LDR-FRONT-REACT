import { useEffect, useState } from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import { Form } from './components/Form'
import { Navbar } from './components/NavBar'

const Root = () => {
    const navigation = useNavigation()

    return (
        <>
            <Navbar />

            {navigation.state === 'loading' && <div className="alert alert-info my-5">Loading...</div>}

            <Outlet />
        </>
    )
}
export default Root
