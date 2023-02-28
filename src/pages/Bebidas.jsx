import { useLoaderData } from 'react-router-dom'
import { CardProduct } from '../components'

export const Bebidas = () => {
    const bebidas = useLoaderData()
    document.title = 'F5LDR | Bebidas'
    return (
        <>
            {bebidas.map((producto) => (
                <CardProduct key={producto.id} descripcion={producto.Descripcion} />
            ))}
        </>
    )
}
