export default function CartList({ cart, removeFromCart, total }) {
  const removeProduct = (targetIndex) => {
    if (confirm("정말 삭제할까요?")) {
      removeFromCart(targetIndex);
    }
  };
  return (
    <div className="cart-box">
      <h2>장바구니 : {cart.length}개</h2>
      <ul className="cart-list">
        {cart.map((item, index) => (
          <li className="cart-item" key={index}>
            <p className="cart-item-name">{item.name}</p>
            <button onClick={() => removeProduct(index)}>삭제</button>
          </li>
        ))}
      </ul>
      <h3>총 금액 : {total.toLocaleString()}원</h3>
    </div>
  );
}
