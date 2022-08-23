import "./Discount.css";
function Discount() {
  return (
    <div className="discount-block">
      <div className="discount-block-container">
        <div className="discount-title">
          <h3>Весь июль со скидкой в 50%! </h3>
        </div>
        <div className="discount-description">
          <p>Принеси с собой кружку и получи свой кофе с 50% скидкой! </p>
        </div>
      </div>
        <a className="how-to-get-there" href="#">Как добраться </a>
    </div>
  );
}
export default Discount;
