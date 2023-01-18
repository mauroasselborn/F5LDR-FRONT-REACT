import { createBrowserRouter } from 'react-router-dom'
import { Footer, Navegacion } from '../components'
import Layout from '../layouts/Layout'
import { Bebidas, Comidas, Snacks } from '../pages'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Bebidas />,
            },
            {
                path: '/comidas',
                element: <Comidas />,
            },
            ,
            {
                path: '/snacks',
                element: <Snacks />,
            },
        ],
    },
])
