import { Fragment, useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    title: "Gambar Satu",
    price: 1000000,
    image: "images/card-top.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
    consequuntur quod placeat et ipsum atque. Quod commodi modi error
    architecto obcaecati iusto pariatur dolor, expedita quos beatae odit
    sit praesentium?`,
  },
  {
    id: 2,
    title: "Gambar Dua",
    price: 2000000,
    image: "images/card-top.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
    consequuntur quod placeat et ipsum atque. Quod commodi modi error praesentium?`,
  },
  {
    id: 3,
    title: "Gambar Tiga",
    price: 500000,
    image: "images/card-top.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
    consequuntur quod placeat et ipsum atque. Quod commodi modi error praesentium?`,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
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
        <div className="w-3/4 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header
                image={product.image}
                alt="Sunset in the mountains"
              />
              <CardProduct.Body title={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                addToCart={handleAddToCart}
                price={product.price}
                id={product.id}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold ml-5 mb-2">Cart</h1>

          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find((p) => p.id === item.id);
                return (
                  <tr key={item.id}>
                    <td>{product.title}</td>
                    <td>
                      Rp{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp{" "}
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
