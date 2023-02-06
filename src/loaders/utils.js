export const fetchProducts = async () => {
    const res = await fetch('http://localhost:3000/products') // para trabajar desde local
    //const res = await fetch('http://192.168.0.20:3000/products') //Para laburar desde la network

    return await res.json()
}
