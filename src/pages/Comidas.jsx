import { useLoaderData } from 'react-router-dom'
import { CardProduct } from '../components/Card'

export const Comidas = () => {
    const comidas = useLoaderData()
    document.title = 'F5LDR | Comidas'

    return (
        <>
            {comidas.map((producto) => (
                <CardProduct key={producto.id} descripcion={producto.Descripcion} />
            ))}
        </>
    )
}
