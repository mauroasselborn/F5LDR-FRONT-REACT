import { useLoaderData } from 'react-router-dom'
import { CardProduct } from '../components/Card'

export const Bebidas = () => {
    const bebidas = useLoaderData()

    return (
        <>
            {bebidas.map((producto) => (
                <CardProduct key={producto.id} descripcion={producto.Descripcion} />
            ))}
        </>
    )
}
