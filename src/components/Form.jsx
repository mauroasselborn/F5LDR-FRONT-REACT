export const Form = () => {
    const cargarProducto = async (e) => {
        e.preventDefault()
        const url = 'http://localhost:3000/product'
        const data = {
            description: 'Prueba de POST',
            size: 1000,
            value: 250,
            stock: 10,
            stock_min: 50,
            brand_id: 2,
            category_id: 3,
        }

        await fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }

    return (
        <form onClick={cargarProducto}>
            <button>Apretar</button>
        </form>
    )
}
