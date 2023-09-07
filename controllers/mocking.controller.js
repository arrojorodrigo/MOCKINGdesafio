import { productos } from "../data/products.js"

const getProducts = (req, res)=> {

    res.send(productos)

}

export {getProducts}