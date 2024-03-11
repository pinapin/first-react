import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header
          image="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <CardProduct.Body title="The Coldest Sunset">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          consequuntur quod placeat et ipsum atque. Quod commodi modi error
          architecto obcaecati iusto pariatur dolor, expedita quos beatae odit
          sit praesentium?
        </CardProduct.Body>
        <CardProduct.Footer price={`1.000.000`} />
      </CardProduct>

      <CardProduct>
        <CardProduct.Header
          image="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <CardProduct.Body title="The Coldest Sunset">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          consequuntur quod placeat et ipsum atque. Quod commodi modi error
          architecto obcaecati iusto pariatur dolor, expedita quos beatae odit
          sit praesentium?
        </CardProduct.Body>
        <CardProduct.Footer price={`1.000.000`} />
      </CardProduct>

      <CardProduct>
        <CardProduct.Header
          image="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <CardProduct.Body title="The Coldest Sunset">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          consequuntur quod placeat et ipsum atque. Quod commodi modi error
          architecto obcaecati iusto pariatur dolor, expedita quos beatae odit
          sit praesentium?
        </CardProduct.Body>
        <CardProduct.Footer price={`1.000.000`} />
      </CardProduct>

      <CardProduct>
        <CardProduct.Header
          image="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <CardProduct.Body title="The Coldest Sunset">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          consequuntur quod placeat et ipsum atque. Quod commodi modi error
          architecto obcaecati iusto pariatur dolor, expedita quos beatae odit
          sit praesentium?
        </CardProduct.Body>
        <CardProduct.Footer price={`1.000.000`} />
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
