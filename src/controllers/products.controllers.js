import * as productsServices from "../services/products.services.js"

export const addProduct = async (req, res) => {
    try{
        const product = req.body;
        const newProduct = await productsServices.addProductService(product)
        res.status(200).json(newProduct);
    }catch(error){
        res.status(500).send()
    }
}

export const deleteProduct = async (req, res) => {
    try{
        const id = req.params.id;
        if(id){
            await productsServices.deleteProductService(id)
            res.sendStatus(200)//status(200)//.send()
        }else{
            res.status(400).json(error)
        }
    }catch(error){
        res.status(500).send()
    }  
}

export const editProduct = async (req, res) => {
    try{
        const id = req.params.id
        const product = req.body
        if (id && product){
            const newProduct = await productsServices.editProductService(id, product)
            res.status(200).json(newProduct);
        }else{
            res.status(400).json(error)
        }
    }catch(error){
        res.status(500).send()
    }
}

export const getAllProducts = async (req, res) => {
    try {
        const products = await productsServices.getAllProductsService()
        console.log(products)
        res.status(200).json(products);
    } catch (error) {
        console.error('Error en getAllProducts:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
                if (id){
                    const product = await productsServices.getProductByIdService(id)
                    if (product) {
                        res.status(200).json(product);
                    } else {
                        res.status(404).json({ message: 'Producto no encontrado' });
                    }
                }else{
                    res.status(400).json(error)
                }
    } catch (error) {
        console.error('Error en getProductById:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};