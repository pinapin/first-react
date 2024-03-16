import { Fragment } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";

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

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
  return (
    <Fragment>
      {/* navbar below */}
      <div className="flex justify-end h-16 bg-blue-600 text-white items-center px-10 font-semibold">
        {email}
        <Button
          className="ml-3 bg-black hover:bg-red-800"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>

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

      <div className="flex justify-center w-100">
        <Counter></Counter>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
