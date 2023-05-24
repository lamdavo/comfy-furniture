import { useProductsContext } from "../context/products_context";

const Products = () => {
  const { products } = useProductsContext();
  return <div>products</div>;
};
export default Products;
