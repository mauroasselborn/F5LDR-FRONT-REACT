export const fetchProducts = async () => {
    const res = await fetch('http://localhost:3000/products') // para trabajar desde local
    //const res = await fetch('http://192.168.0.20:3000/products') //Para laburar desde la network
    // const res = await fetch('http://192.168.0.40:3000/products') //Para laburar desde la network

    return await res.json()
}

const productos = await fetchProducts()

export const loaderBebidas = async () => {
    const bebidas = productos.filter((producto) => producto.categoria === 'Bebidas')

    return bebidas
}
export const loaderComidas = async () => {
    const comidas = productos.filter((producto) => producto.categoria === 'Comidas')

    return comidas
}
export const loaderSnacks = async () => {
    const snacks = productos.filter((producto) => producto.categoria === 'Snacks')

    return snacks
}
