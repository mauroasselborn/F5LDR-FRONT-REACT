import { Button, Card } from 'react-bootstrap'
import { Link, useLoaderData } from 'react-router-dom'

export const Bebidas = () => {
    const productos = useLoaderData()

    const bebidas = productos.filter((producto) => producto.Categoria === 'Cervezas')
    return (
        <>
            {productos.map((producto) => (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{producto.Descripcion}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">+</Button>
                        <Button variant="primary">-</Button>
                    </Card.Body>
                </Card>
            ))}
        </>
    )
}
