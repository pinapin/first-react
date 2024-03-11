import Button from "../Elements/Button";
const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm rounded-lg shadow border mx-2">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image, alt } = props;
  return (
    <a href="#">
      <img src={image} alt={alt} className="pb-5 rounded-t-lg w-full" />
    </a>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="px-5 pb-5">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="text-gray-700 text-m">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-gray-900">Rp {price}</span>
      <Button className=" bg-blue-700">Add to Cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
