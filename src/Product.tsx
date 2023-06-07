import { useState } from "react";

type ProductProps = {
  name: string;
  detail: string;
  price: number;
  quantity: number;
  surce:string;
};

function Product(props: ProductProps) {
  const [quantity, setquantity] = useState(props.quantity);
  console.log(quantity);

  function handleSum() {
    setquantity(quantity + 1);
  }

  function handleRest() {
    setquantity(quantity - 1);
  }

  return (
    <div className="container">
      <h2 classname="name Prod">{props.name}</h2>
      <img className="imag Prod" src={props.surce}></img>
      <p className="detail">{props.detail}</p>
      <h4 className="price Prod">$ {props.price}</h4>
      <h3 className="quantity Prod">{quantity}</h3>
      <button className="button +" onClick={handleSum} type="button">+</button>
      <button className="button -" onClick={handleRest}type="button">-</button>
    </div>
  );
}
export default Product;
