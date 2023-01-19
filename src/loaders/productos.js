export const loaderProductos = async () => {
    const res = await fetch('http://localhost:3000/products')
    const productos = await res.json()

    return productos
}
