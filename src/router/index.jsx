import { createBrowserRouter } from 'react-router-dom'
import Root from '../layouts/Root'
import { loaderProductos } from '../loaders/productos'
import { Bebidas, Comidas, Snacks } from '../pages'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Bebidas />,
                loader: loaderProductos,
            },
            {
                path: '/comidas',
                element: <Comidas />,
                // loader: loaderProductos,
            },
            ,
            {
                path: '/snacks',
                element: <Snacks />,
                // loader: loaderProductos,
            },
        ],
    },
])
