export const loaderBebidas = async () => {
    // const res = await fetch('http://localhost:3000/products') para trabajar desde local
    const res = await fetch('http://192.168.2.166:3000/products') //Para laburar desde la network

    const productos = await res.json()

    const bebidas = productos.filter((producto) => producto.Categoria === 'Bebidas')

    return bebidas
}
export const loaderComidas = async () => {
    // const res = await fetch('http://localhost:3000/products') para trabajar desde local
    const res = await fetch('http://192.168.2.166:3000/products') //Para laburar desde la network
    const productos = await res.json()

    const comidas = productos.filter((producto) => producto.Categoria === 'Comidas')

    return comidas
}
export const loaderSnacks = async () => {
    // const res = await fetch('http://localhost:3000/products') para trabajar desde local
    const res = await fetch('http://192.168.2.166:3000/products') //Para laburar desde la network
    const productos = await res.json()

    const snacks = productos.filter((producto) => producto.Categoria === 'Snacks')

    return snacks
}
