import { useLoaderData } from 'react-router-dom'
import { CardProduct } from '../components/Card'

export const Comidas = () => {
    const comidas = useLoaderData()
    document.title = 'F5LDR | Comidas'

    return (
        <div className="productos">
            {comidas.map((producto) => (
                <CardProduct key={producto.id} producto={producto} />
            ))}
        </div>
    )
}
