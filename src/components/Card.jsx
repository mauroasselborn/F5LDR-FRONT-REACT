import { useEffect, useState } from 'react'
import './card.css'
import logo from '../imgs/default.png'

export const CardProduct = ({ producto }) => {
    const [cantidad, setCantidad] = useState(0)
    const [stock, setStock] = useState(producto.stock)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        totalizar()
    }, [cantidad])

    const totalizar = () => {
        setTotal(cantidad * producto.valor)
    }

    const handleSumCant = () => {
        setStock(stock - 1)
        setCantidad(cantidad + 1)
        console.log(cantidad)
    }
    const handleResCant = () => {
        setStock(stock + 1)
        setCantidad(cantidad - 1)
        console.log(cantidad)
    }

    return (
        <div className="card">
            <div className="img">
                <img src={`src/imgs/${producto.srcImg}`} height="200px" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{producto.descripcion}</h2>
                <p className="card-text">Valor: {producto.valor}$</p>
                <p>Stock: {stock}</p>
                <p>Cantidad a Vender {cantidad}</p>
                <p>Total {total}$</p>
                <button onClick={stock > 0 && handleSumCant} className="btn btn-primary">
                    +
                </button>
                <button onClick={cantidad <= 0 && handleResCant} className="btn btn-primary">
                    -
                </button>
            </div>
        </div>
    )
}
