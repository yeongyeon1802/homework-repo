export default function ProductList({ products, addToCart }) {
  return (
    <div>
      <h2>상품 목록</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li className="prodct-item" key={product.id}>
            {product.name}({product.price}원)
            <button onClick={() => addToCart(product)}>담기</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
