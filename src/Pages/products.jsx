import CardProduct from "../components/Fragment/CardProduct";


const products = [
    {
        id: 1,
        image: "/images/product-1.jpg",
        name: "Sepatu Nike Green",
        price: "Rp 1.000.000",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam exercitationem unde inventore adipisci alias pariatur cumque, aut aliquam sunt possimus doloremque similique quam est voluptatibus facere, iste placeat enim iure.",
    },
    {
        id: 2,
        image: "/images/product-2.jpg",
        name: "Sepatu Nike Red",
        price: "Rp 1.500.000",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
    }
]
const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">
            {products.map((product) => (
                 <CardProduct key={product.id}>
                 <CardProduct.Header image = {product.image} />
                 <CardProduct.Body name ={product.name}>{product.description}</CardProduct.Body>
                 <CardProduct.Footer price ={product.price}>Add To Cart</CardProduct.Footer>
                </CardProduct>
            ))}
        
        </div>
    );
};

export default ProductsPage;