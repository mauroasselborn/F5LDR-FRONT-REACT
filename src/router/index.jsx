import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { loaderBebidas, loaderComidas, loaderSnacks } from '../loaders/productos'
import { Bebidas, Comidas, Snacks } from '../pages'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Bebidas />,
                loader: loaderBebidas,
            },
            {
                path: '/comidas',
                element: <Comidas />,
                loader: loaderComidas,
            },
            ,
            {
                path: '/snacks',
                element: <Snacks />,
                loader: loaderSnacks,
            },
        ],
    },
])
