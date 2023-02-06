import { fetchProducts } from './utils'

const productos = await fetchProducts()

export const loaderBebidas = async () => {
    const bebidas = productos.filter((producto) => producto.Categoria === 'Bebidas')

    return bebidas
}
export const loaderComidas = async () => {
    const comidas = productos.filter((producto) => producto.Categoria === 'Comidas')

    return comidas
}
export const loaderSnacks = async () => {
    const snacks = productos.filter((producto) => producto.Categoria === 'Snacks')

    return snacks
}
