import { useLoaderData } from 'react-router-dom'
import { CardProduct } from '../components'
import './bebidas.css'

export const Bebidas = () => {
    const bebidas = useLoaderData()
    document.title = 'F5LDR | Bebidas'

    return (
        <div className="productos">
            {bebidas.map((producto) => (
                <CardProduct key={producto.id} producto={producto} />
            ))}
        </div>
    )
}
