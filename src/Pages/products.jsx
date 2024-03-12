import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    title: "Gambar Satu",
    price: "1.000.000",
    image: "images/card-top.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
    consequuntur quod placeat et ipsum atque. Quod commodi modi error
    architecto obcaecati iusto pariatur dolor, expedita quos beatae odit
    sit praesentium?`,
  },
  {
    id: 2,
    title: "Gambar Dua",
    price: "2.000.000",
    image: "images/card-top.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
    consequuntur quod placeat et ipsum atque. Quod commodi modi error praesentium?`,
  },
];

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.Header
            image={product.image}
            alt="Sunset in the mountains"
          />
          <CardProduct.Body title={product.title}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductsPage;
