import { useLoaderData } from 'react-router-dom'
import { CardProduct } from '../components/Card'

export const Snacks = () => {
    const snacks = useLoaderData()
    document.title = 'F5LDR | Snacks'

    return (
        <>
            {snacks.map((producto) => (
                <CardProduct key={producto.id} descripcion={producto.Descripcion} />
            ))}
        </>
    )
}
